import { Injectable } from '@angular/core';
import { User } from './shared/classes/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { HttpService } from './http.service';

@Injectable()
export class UserService {

  private roles: string[] = [ 'user', 'admin' ];
  private users: User[] = [];

  constructor(private http: HttpService) { }

  public getUser() {
    return this.http.httpGet('users');
    // return Observable.from(this.users);
  }

  public getRole(): Observable<string> {
    return Observable.from(this.roles);
  }

  public addUser(username: string, password: string, user: string, phone: string) {
    // TODO: check exists, db
    this.users.push({ 
      id: Math.floor(Math.random() * 100), 
      username: username, 
      name: user, 
      password: password, 
      phone: phone, 
      role_id: [0] 
    });
  }

  public updateUser(username: string, roles: number[]) {
    let userIndex = this.users.findIndex(arr => arr.username === username);
    // TODO: db
    this.users[userIndex].role_id = roles;
  }

  public deleteUser(username: string) {
    let userIndex = this.users.findIndex(arr => arr.username === username);
    // TODO: db
    this.users.splice(userIndex, 1);
  }
}
