import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public loggedIn: boolean;

  constructor() { }

  public validateUser(userData: any): void {
    if (!localStorage.getItem('user')) { // TODO: db check
      let saveData = { 'username': userData.username, 'password': userData.password };
      localStorage.setItem('user', JSON.stringify(saveData));
    } 
    this.loggedIn = true;
  }

  public logout(): void {
    this.loggedIn = false;
  }

}
