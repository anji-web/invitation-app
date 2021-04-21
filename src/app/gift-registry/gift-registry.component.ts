import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { ActionService } from '../service/action.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gift-registry',
  templateUrl: './gift-registry.component.html',
  styleUrls: ['./gift-registry.component.css']
})
export class GiftRegistryComponent implements OnInit {
  formUser: User = new User()
  constructor(private actionServ : ActionService, private route: Router) { }

  ngOnInit(): void {
  }

  onSaveUser() {
    this.actionServ.addUserGuest(this.formUser).subscribe(response => {
      if (response) {
        Swal.fire(
          'Yeahh',
          'Your register succesfully',
          'success'
        )
        this.route.navigate(["home"])
      }
    },
      error => {
        Swal.fire(
          'Sorry',
          'Your register Failed please try again',
          'error'
        )

    })
  }

}
