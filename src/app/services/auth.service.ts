import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "http://localhost/demo-angular-app-api/signin.php";
  constructor(private http: HttpClient) { }

  signIn(data: any){
    return this.http.post(this.baseUrl, data);
  }
}
