import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public loggedIn: boolean;

  constructor() { }

  private notUserSaved(): boolean {
    return (!localStorage.getItem('user'));
  }

  private saveUserData(username: string, password: string): void {
    let saveData = { 'username': username, 'password': password };
    localStorage.setItem('user', JSON.stringify(saveData));
  }

  public validateUser(userData: any): boolean {
    if (this.notUserSaved()) {
      this.saveUserData(userData.username, userData.password);
      this.loggedIn = true;
      return this.loggedIn;
    } 
    
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
    if (!this.loggedIn) return '';
    let userSaved = JSON.parse(localStorage.getItem('user'));
    return userSaved.username;
  }
  
  public logout(): void {
    this.loggedIn = false;
  }

}
