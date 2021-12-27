import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from 'src/app/interfaces/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseUrl = "http://localhost/demo-angular-app-api/signup.php";

  constructor(private http: HttpClient) { }

  signUp(data: any)
  {
    return this.http.post(this.baseUrl, data);
  }
}
