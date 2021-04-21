import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { User } from '../model/User';
import { Video } from '../model/Video';



const url = "http://localhost:8081/"

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  constructor(private http: HttpClient) { }

  getVideoById(Id: number): Observable<any>{
    return this.http.get<any>(url + 'video-api/' + `download/${Id}`, {
      responseType: 'blob' as 'json'
    })
  }

  getListVideo(): Observable<Video[]> {
    return this.http.get<Video[]>(url+'video-api/'+'list-video')
  }

  addUserGuest(user : User): Observable<Object> {
    return this.http.post(url + "user-api/" + "add-user-guest", user, { responseType: 'text' }).pipe(catchError(this.handleError))
  }

  private handleError(err: any) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error : ${err.error.message}`
    } else {
      errorMessage = `Error status code : ${err.status} \n message : ${err.message}`
    }

    return throwError(errorMessage)
  }
}

