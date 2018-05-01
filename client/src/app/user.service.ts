import { Injectable } from '@angular/core';
import { User } from './shared/classes/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class UserService {
  private roles: string[] = [ 'user', 'admin' ];
  private users: User[] = [
    {id: 1, username: 'john', password: '', name: 'John Smith', phone: '', role_id: [ 0 ] },
    {id: 2, username: 'admin', password: '', name: 'Admin', phone: '', role_id: [ 0, 1 ] }
  ];  

  constructor() { }

  public getUser(): Observable<User> {
    return Observable.from(this.users);
  }

  public getRole(): Observable<string> {
    return Observable.from(this.roles);
  }

  public addUser(username: string, password: string, user: string, phone: string) {
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
    this.users[userIndex].role_id = roles;
  }

  public deleteUser(username: string) {
    let userIndex = this.users.findIndex(arr => arr.username === username);
    this.users.splice(userIndex, 1);
  }
}
