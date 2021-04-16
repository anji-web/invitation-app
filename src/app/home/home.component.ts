import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/User';
import { ActionService } from '../service/action.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  map: string = ''
  mapReception : string = ''
  dataUser : User = new User()

  constructor(private actionService: ActionService) {
  }

  ngOnInit(): void {
    this.map = 'https://www.google.com/maps/place/Gereja+Kristen+Indonesia+-+Harapan+Indah/@-6.1781792,106.9811167,15z/data=!4m2!3m1!1s0x0:0xb4637be52eefd137?sa=X&ved=2ahUKEwi4t8m0_oLwAhVVyDgGHZq6AFIQ_BIwFXoECCUQBQ'
    
  }


}
