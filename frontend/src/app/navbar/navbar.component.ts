import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  logoutUser(){

    localStorage.removeItem('token');
    this._router.navigate(['home']);
  }

}
