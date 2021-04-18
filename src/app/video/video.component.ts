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
  id: number = 1
  videos: Video[] = []
  file : any
  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.getList()
    this.getFile()
  }

  getFile() {
    this.actionService.getVideoById(this.id).subscribe(
      data => {
        this.convertToBase64(data)
      }
    )
  }

  convertToBase64(data: File) {
    const observable = new Observable((subscribe: Subscriber<any>) => {
      this.readFile(data, subscribe);
    })

    observable.subscribe(d => {
      this.file = d
    })

  }

  readFile(data: File, subscribe: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(data)

    fileReader.onload = () => {
      subscribe.next(fileReader.result)
      subscribe.complete()
    }

    fileReader.onerror = (error) => {
      subscribe.error(error);
      subscribe.complete()
    }

  }


  getList() {
    this.actionService.getListVideo().subscribe(res => {
      this.videos = res
      console.log(this.videos)
    })
  }

}
