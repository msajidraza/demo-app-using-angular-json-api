import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { SigninComponent } from './MyComponents/signin/signin.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { UsersComponent } from './MyComponents/users/users.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
