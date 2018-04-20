import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private roles: string[];
  private users: User[];
  public displayedColumns = [ 'username', 'name', 'role_id' ];
  public dataSource;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.allUsers();
    this.roles = this.userService.allRoles();
    this.dataSource = this.users;
  }

}
