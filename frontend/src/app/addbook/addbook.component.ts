import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  newBook = {

            name: "",
            authorName: "",
            description: "",
            starRating: "",
            imageUrl: ""

  }

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  Addbook()
  {
    console.log(this.newBook);

    this._auth.addBook(this.newBook)
    .subscribe(
      (res) => {
        
        alert (res.message);
        this._router.navigate(['/books'])
      }
    )
  }

}
