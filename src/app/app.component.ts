import { Component } from '@angular/core';
import { UserDataService } from './service/data/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private userService: UserDataService) {}
  logoutUser() {
    this.userService.logout();
  }
}
