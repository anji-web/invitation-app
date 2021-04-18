import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin = {
    email: '',
    password: ''

  }
  constructor(private authService : AuthService, private route : Router) { }

  ngOnInit(): void {
  }

  onSubmitLogin() {
    console.log(this.userLogin)
    this.authService.loginUser(this.userLogin).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
