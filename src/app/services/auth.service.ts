import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //pass user info
  authUser(user: any) {
    //Users in local storage
    let UserArray = [];
    const storedUsers = localStorage.getItem('Users');

    if(localStorage.getItem('Users')) {
      UserArray = storedUsers? JSON.parse(storedUsers): [];
    }

    //check username and password each element in UserArray(localStorage) matching with parameter(user)
    return UserArray.find((p:any) => p.userName === user.userName && p.password === user.password);
  }
}
