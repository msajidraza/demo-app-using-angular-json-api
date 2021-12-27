import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  constructor(private usersData: UserService) { }

  ngOnInit(): void {

    this.usersData.users().subscribe(
      
      (data) => {
        //console.warn("data", data);
        this.users = data;
      }
    ); 
  }

}
