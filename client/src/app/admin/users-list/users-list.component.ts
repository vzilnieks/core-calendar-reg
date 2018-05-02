import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { debug } from 'util';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private roles: string[] = [];
  private users: User[] = [];
  private displayedColumns = [ 'username', 'name', 'role_id' ];
  private dataSource;
  private userForm: FormGroup = new FormGroup({
    usernameInput: new FormControl('', [ Validators.required ]),
    passwordInput: new FormControl('', [ Validators.required ]),
    nameInput: new FormControl('', [ Validators.required ]),
    phoneInput: new FormControl(''),
  });
  private userRoleForm: FormGroup = new FormGroup({});

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.refreshTable();
    this.userService.getRole().subscribe(role => {
      this.roles.push(role);
    });
    this.roles.forEach(role => {
      this.userRoleForm.addControl(role, new FormControl(''));
    });
  }

  private onUpdate(username: string) {
    let rolesArray: number[] = [];
    this.roles.forEach((role, index) => {
      if (this.userRoleForm.get(role).value) {
        rolesArray.push(index);
      };
    });
    this.userService.updateUser(username, rolesArray);
    this.refreshTable();
  }

  private onDelete(username: string) {
    this.userService.deleteUser(username);
    this.refreshTable();
  }

  private getUsers(): User[] {
    let userArray: User[] = [];
    this.userService.getUser().subscribe(user => {
      userArray.push(user);
    });
    return userArray;
  }

  private refreshTable(): void {
    this.users = this.getUsers();
    this.dataSource = this.users;
  }

  private addUser() {
    this.userService.addUser(
        this.userForm.controls.usernameInput.value,
        this.userForm.controls.passwordInput.value,
        this.userForm.controls.nameInput.value,
        this.userForm.controls.phoneInput.value)
    this.refreshTable();
  }

}
