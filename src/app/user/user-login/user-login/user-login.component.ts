import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { AuthService } from 'src/app/services/auth.service';
import { EventTypes } from 'src/app/model/event-types';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  EventTypes = EventTypes;
  
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router) {}

  ngOnInit() {
    
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);

    if(token) {
      localStorage.setItem('token', token.userName);
      this.toastService.showSuccessToast('Login Successful', 'Congrats, you are successfully login');
      //redirect our user to the base URL
      this.router.navigate(['/']);
    } else {
      this.toastService.showErrorToast('Login Failed', 'User ID or password is wrong');
    }

  }
}
