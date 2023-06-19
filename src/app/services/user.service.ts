import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: User) {
    //store multiple users
    let users = [];

    const storedUsers = localStorage.getItem('Users');

    //check if local storage already has users
    if(localStorage.getItem('Users')) {
      //if the value already there, assign that value to users by converting JSON String to JSON Object
      //users object already has existing arrays of Users that is stored in local storage
      users = storedUsers?  JSON.parse(storedUsers) : [];
      //now we can get our new user that we get from OnSubmit() to existing array of users (...users)
      users = [user, ...users];
    } else {
      //if no Users key exist, we will just assign new user to the users array
      users = [user];
    }

    localStorage.setItem('Users', JSON.stringify(users));
  }
}
