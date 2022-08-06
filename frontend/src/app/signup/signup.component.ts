import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  adduser = {

    name: "",
    password: ""

  }

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  newUser()
  {

    console.log(this.adduser);
    this._auth.newUser(this.adduser)  
   

  



  }


}
