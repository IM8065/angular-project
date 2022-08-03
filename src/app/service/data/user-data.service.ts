import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient, private router: Router) {}

  authenticateUser(username: any, password: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const url = 'http://localhost:8080/api/auth/login';
    let loginObj = { username: username, password: password };

    return this.http.post(url, loginObj, httpOptions);
  }

  registerUser(user: User) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    try {
      let postRequest = this.http
        .post<User>(
          'http://localhost:8080/api/auth/register',
          user,
          httpOptions
        )
        .subscribe((res) => {
          console.log(res);

          if (res) {
            let resJSON = JSON.stringify(res);
            localStorage.setItem('userdetails', resJSON);
            this.router.navigate(['homepage']);
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  logout() {
    localStorage.removeItem('userdetails');
    this.router.navigate(['login']);
  }
}
