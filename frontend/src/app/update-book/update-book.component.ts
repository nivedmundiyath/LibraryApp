import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  newBook = {
    _id: "",
    name: "",
    authorName: "",
    description: "",
    starRating: "",
    imageUrl: ""

}
  constructor(private _router:Router, private _auth:AuthService) { }

  ngOnInit(): void {

    let bookId = localStorage.getItem("editbookId");
    this._auth.getbook(bookId).subscribe((data)=>{
      this.newBook=JSON.parse(JSON.stringify(data));
  })
  }


  
  Updatebook(){

    this._auth.editbook(this.newBook)
    .subscribe(
      (res:any) => {
        alert (res.message);
        this._router.navigate(['/books'])
      }
    )


  }

}
