import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
            name: "",
            passwd: ""
  }
  

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  userValidation(){
    console.log(this.user);

  }
  loginUser ()
  {
    console.log(this.user);

    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        
        localStorage.setItem('token', res.token)
        this._router.navigate(['/books'])
      }
    )
  }

}
