import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser: string | null = null;

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedin() {
    //if a user is logged in, it will contain a value 
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout() {
    //remove token when logout
    localStorage.removeItem('token');
    this.alertify.success("You are logged out");
  }
}
