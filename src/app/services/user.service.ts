import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost/demo-angular-app-api/user.php";

  constructor(private http: HttpClient) { }

  users()
  {
    return this.http.get(this.baseUrl);
  }
}
