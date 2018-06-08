import { Injectable } from '@angular/core';
import { User } from './shared/classes/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { HttpService } from './http.service';

@Injectable()
export class UserService {

  private roles: string[] = [ 'admin', 'user' ];
  private users: User[] = [];

  constructor(private http: HttpService) { }

  public getUsers() {
    return this.http.httpGet('users');
  }

  public getRole(): Observable<string> {
    return Observable.from(this.roles);
  }

  public addUser(username: string, password: string, user: string, phone: string) {
    return this.http.httpPost('users', {
      username: username,
      password: password,
      user: user,
      phone: phone,
      role_id: [1]
    });
  }

  public updateUser(userId: number, roles: number[]) {
    // let userIndex = this.users.findIndex(arr => arr.username === username);
    // TODO: db
    // this.users[userIndex].role_id = roles;
    return this.http.httpPut(`users/${userId}`, {roles: roles});
  }

  public deleteUser(userId: number) {
    return this.http.httpDelete(`users/${userId}`);
    // let userIndex = this.users.findIndex(arr => arr.username === username);
    // this.users.splice(userIndex, 1);
  }
}
