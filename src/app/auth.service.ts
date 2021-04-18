import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './model/User';
import { catchError, map } from "rxjs/operators";

const url = 'http://localhost:8081/'
const storeToken = 'token'
@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http : HttpClient) { }

  loginUser(requestLogin : Request) {
    return this.http.post<any>(url + 'user-api/' + 'login', requestLogin).pipe(map(user => {
      localStorage.setItem(storeToken, JSON.stringify(user))
      return user
    }), catchError(error => {
      alert(error.error)
      return of(false)
    }))
  }


  isLoggedIn() {
    return !!localStorage.getItem(storeToken)
  }

  getToken() {
    var token = localStorage.getItem(storeToken)
    return token;
  }

  logout() {
    return localStorage.removeItem(storeToken)
  }

}


export interface Request{
  email: string,
  password: string
}
