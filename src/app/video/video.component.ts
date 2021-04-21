import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Video } from '../model/Video';
import { ActionService } from '../service/action.service'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  content: Array<any> = new Array()
  totalLength?: number
  title: string[] = []
  page: number = 1
  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.content = [
      {
        title: 'Undangan Eka & viktor (English Version)',
        value: '../../assets/video/Undangan Viktor English.mp4'
      },
      {
        title: 'Undangan Eka & viktor (Indonesian Version)',
        value: '../../assets/video/Undangan Victor Indo.mp4'
      }
    ]


    this.totalLength = this.content.length
    this.title = ["Undangan Viktor", 'small mp4']
    console.log(this.totalLength)
  }
}
