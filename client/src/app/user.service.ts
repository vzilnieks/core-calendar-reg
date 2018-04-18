import { Injectable } from '@angular/core';
import { User } from './shared/classes/user';

@Injectable()
export class UserService {
  private roles: string[] = [ 'user', 'admin' ];
  private users: User[] = [
    {id: 1, username: 'john', password: '', name: 'John Smith', phone: '', role_id: 0 },
    {id: 2, username: 'admin', password: '', name: 'Admin', phone: '', role_id: 1 }
  ];  

  constructor() { }

  public allUsers(): User[] {
    return this.users;
  }

  public allRoles(): string[] {
    return this.roles;
  }

}
