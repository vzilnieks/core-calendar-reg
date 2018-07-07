import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  private isLoggedSubject = new BehaviorSubject<boolean>(this.hasJToken());

  constructor(private userService: UserService) { }

  public isLoggedIn(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  private hasJToken(): boolean {
    return !!localStorage.getItem('token');
  }

  public login(username: string): void {
    // TODO: check remotely and get token
    let saveData = { 
      'username': username, 
      'JWT': '...' 
    };
    localStorage.setItem('token', JSON.stringify(saveData));
    this.isLoggedSubject.next(true);
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }

  public getCurrentUserName(): string {
    let userSaved = JSON.parse(localStorage.getItem('token'));
    return userSaved.username;
  }

}
