import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loggedin() {
    //if a user is logged in, it will contain a value 
    return localStorage.getItem('token');
  }

  onLogout() {
    //remove token when logout
    localStorage.removeItem('token');
  }
}
