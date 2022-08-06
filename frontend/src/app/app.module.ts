import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import {TokenInterceptorService} from './token-interceptor.service';
import { UpdateBookComponent } from './update-book/update-book.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    BooksComponent,
    AddbookComponent,
    HomeComponent,
    FooterComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    },
    UpdateBookComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
