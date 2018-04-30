import { Injectable } from '@angular/core';
import { User } from './shared/classes/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class UserService {
  private roles: string[] = [ 'user', 'admin' ];
  private users: User[] = [
    {id: 1, username: 'john', password: '', name: 'John Smith', phone: '', role_id: 0 },
    {id: 2, username: 'admin', password: '', name: 'Admin', phone: '', role_id: 1 }
  ];  

  constructor() { }

  public getUser(): Observable<User> {
    return Observable.from(this.users);
  }

  public getRole(): Observable<string> {
    return Observable.from(this.roles);
  }

  public addUser(username:string, name: string, password: string, phone: string) {
    this.users.push( 
      { id: Math.floor(Math.random() * 100), username: username, name: name, password: password, phone: phone, role_id: 0 } );
  }

}
