import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/service/data/user-data.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User('', '');

  constructor(private userService: UserDataService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.registerUser(this.user);
  }
}
