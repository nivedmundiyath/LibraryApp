import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUser( user:any)
  {
    return this.http.post<any>("login",user);
    // .subscribe((data) =>
    // {
    //   console.log("sucess")
    // })
  }

  newUser( adduser:any) 
  {

    return this.http.post<any>("adduser",adduser,{responseType:"json"})
    .subscribe(
      (data) => {
        console.log(data);
         alert (data.message);
        this._router.navigate(['/login'])
      }
    )

  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  getToken(){

    return localStorage.getItem("token")
  }

  addBook( newBook:any){

    return this.http.post<any>("book",newBook)

  }

  getBooks()
  {
    return this.http.get("books")
  }

  getbook(id:any){

    return this.http.get("book/"+id)

  }

  deleteProduct(id:any) {


    return this.http.delete("remove/"+id)

  }

  editbook(book:any){

    console.log('client update')
    return this.http.put("update",book)
  }

  constructor( private http:HttpClient, private _router:Router) { }
}

