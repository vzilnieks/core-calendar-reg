import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private roles: string[] = [ 'user', 'admin' ];
  private users: User[] = [
    {id: 1, username: 'john', password: '', name: 'John Smith', phone: '', role_id: 0 },
    {id: 2, username: 'admin', password: '', name: 'Admin', phone: '', role_id: 1 }
  ];  
  public displayedColumns = [ 'username', 'name', 'role_id' ];
  public dataSource = this.users;

  constructor() { }

  ngOnInit() {
  }

}
