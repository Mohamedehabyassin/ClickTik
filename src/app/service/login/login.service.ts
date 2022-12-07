import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user?: User;
  isLogged = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let data = {
      username: username,
      password: password,
    };
    this.http
      .post('https://dummyjson.com/auth/login', data, {
        observe: 'response',
        headers: headers,
      })
      .subscribe((result) => {
        if (result && result.body) {
          this.isLogged.next(true);
          this.router.navigate(['dashboard']);
        } else {
          alert('Login failed');
        }
      });
  }
}
