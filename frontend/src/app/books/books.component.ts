import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UpdateBookComponent } from '../update-book/update-book.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  Book = [{
    _id: "",
    name: "",
    authorName: "",
    description: "",
    starRating: "",
    imageUrl: ""

}]

  constructor(private _auth:AuthService, private _router:Router, public _update:UpdateBookComponent) { }

  ngOnInit(): void {

    this._auth.getBooks().subscribe((data)=>{

      this.Book=JSON.parse(JSON.stringify(data));
    
    })

    console.log(this.Book)


      

  }

  


  deleteBook(book:any)
  {
    console.log(book._id)
    this._auth.deleteProduct(book._id)
      .subscribe((data)=>{
        this.Book = this.Book.filter(p => p !== book);

      })
  }


  editbook(book:any)
  {
    localStorage.setItem("editbookId", book._id.toString());
    this._router.navigate(['updatebook']);

  }

}
