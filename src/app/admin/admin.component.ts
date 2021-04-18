import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService,private route : Router ) { }

  ngOnInit(): void {

  }

  onSignOut() {
    this.authService.logout()
    this.route.navigate(['login'])
  }

}
