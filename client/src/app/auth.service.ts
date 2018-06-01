import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  public loggedIn: boolean;

  constructor(private userService: UserService) { }

  private userSaved(): boolean {
    return !localStorage.getItem('user');
  }

  private saveUserData(username: string, password: string): void {
    let saveData = { 
      'username': username, 
      'password': password 
    };
    localStorage.setItem('user', JSON.stringify(saveData));
  }

  public validateUser(userData: any): boolean {
    // this.userService.getUser()
    //     .subscribe(users => 
    //         users.filter(user => 
    //             user.username === userData.username && 
    //             user.password === userData.password));
      // this.loggedIn = true; 
      // return this.loggedIn;
    if (!this.userSaved()) {
      this.saveUserData(userData.username, userData.password);
    };
    this.loggedIn = true;
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
