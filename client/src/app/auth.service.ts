import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  public loggedIn: boolean;

  constructor(private userService: UserService) { }

  private userSaved(): boolean {
    if (!localStorage.getItem('user')) return false;
    return true;
  }

  private saveUserData(username: string, password: string): void {
    let saveData = { 
      'username': username, 
      'password': password 
    };
    localStorage.setItem('user', JSON.stringify(saveData));
  }

  public validateUser(userData: any): boolean {
    this.userService.getUser(userData.username);
    let userSaved = JSON.parse(localStorage.getItem('user'));
    if (userSaved.username === userData.username && 
	      userSaved.password === userData.password) {
      this.loggedIn = true; 
      return this.loggedIn;
    }

    this.loggedIn = false;
    return this.loggedIn;
  }

  public getCurrentUserName(): string {
    if (!this.loggedIn) return null;
    let userSaved = JSON.parse(localStorage.getItem('user'));
    return userSaved.username;
  }
  
  public logout(): void {
    this.loggedIn = false;
  }

}
