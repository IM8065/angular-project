import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserDataService } from 'src/app/service/data/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User('', '');
  errorMessage: string = '';

  constructor(private userService: UserDataService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .authenticateUser(this.user.username, this.user.password)
      .subscribe((res: any) => {
        try {
          if (res.password == this.user.password) {
            let resJSON = JSON.stringify(res);
            localStorage.setItem('userdetails', resJSON);
            this.router.navigate(['homepage']);
          } else {
            this.errorMessage = 'Username or password are incorrect';
          }
        } catch (e) {
          this.errorMessage = 'Somethine went wrong, please try again later';
        }
      });
  }
}
