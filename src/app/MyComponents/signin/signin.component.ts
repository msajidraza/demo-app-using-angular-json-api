import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getSignInFormData(data: any)
  {
    return this.authService.signIn(data).subscribe(
      (res: any) => {
        console.log(res);
        const user = res;
        //console.log(user.token);
        //localStorage = setItem("token", user.token);
        
      }
    )
  }


}
