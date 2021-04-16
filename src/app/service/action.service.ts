import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

const url = "https://jsonplaceholder.typicode.com/"

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  constructor(private http: HttpClient) { }

  getDataUser(): Observable<User[]> {
    return this.http.get<User[]>(url + "users")
  }
}
