import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public loggedIn: boolean;

  constructor() { }

  public validateUser(user: string, password: string): void {
    if (!localStorage.getItem('user')) { // TODO: db check
      localStorage.setItem('user', user);
      localStorage.setItem('password', password);
      this.loggedIn = true;
    } else {
      this.loggedIn = true;
    }
  }

  public logout(): void {
    this.loggedIn = false;
  }

}
