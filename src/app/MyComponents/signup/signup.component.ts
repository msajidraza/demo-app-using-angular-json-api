import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { Signup } from 'src/app/interfaces/signup';
import { SignupService } from 'src/app/services/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
    
  }

  response: any;

  getSignupFormData(data: any)
  {
    //console.warn(data);
    this.signupService.signUp(data).subscribe(
      (response) => {
        console.warn(response);
                     
      }
    );
  }

}
