import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "books",
    canActivate:[AuthGuard],
    component: BooksComponent
  },
  {
    path: "addbook",
    canActivate:[AuthGuard],
    component: AddbookComponent
  },
  {
    path: "updatebook",
    canActivate:[AuthGuard],
    component: UpdateBookComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
