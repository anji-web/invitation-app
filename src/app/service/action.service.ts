import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
