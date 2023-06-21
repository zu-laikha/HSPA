import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { EventTypes } from 'src/app/model/event-types';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser: string | null = null;
  EventTypes = EventTypes;

  constructor(
    private toastService: ToastService,
    ) { }

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
    this.toastService.showSuccessToast('User Logout', 'You are logged out');
  }
}
