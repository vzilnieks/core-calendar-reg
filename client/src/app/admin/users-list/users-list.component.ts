import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private roles: string[] = [];
  private users: User[] = [];
  public displayedColumns = [ 'username', 'name', 'role_id' ];
  public dataSource;
  public userForm: FormGroup = new FormGroup({
    usernameInput: new FormControl('', [ Validators.required ]),
    passwordInput: new FormControl('', [ Validators.required ]),
    userInput: new FormControl('', [ Validators.required ]),
    phoneInput: new FormControl(''),
  });
  public userRoleForm: FormGroup = new FormGroup({});

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
    this.dataSource = this.users;
    this.userService.getRole().subscribe(role => {
      this.roles.push(role);
    });
    this.roles.forEach(role => {
      this.userRoleForm.addControl(role, new FormControl(''));
    });
  }

  onUpdate(username: string) {
    let rolesArray: number[] = [];
    this.roles.forEach((role, index) => {
      if (this.userRoleForm.get(role).value) {
        rolesArray.push(index);
      };
    });
    this.userService.updateUser(username, rolesArray);
    this.users = this.getUsers();
    this.dataSource = this.users;
  }

  onDelete(username: string) {
    this.userService.deleteUser(username);
    this.users = this.getUsers();
    this.dataSource = this.users;
  }

  private getUsers(): User[] {
    let userArray: User[] = [];
    this.userService.getUser().subscribe(user => {
      userArray.push(user);
    });
    return userArray;
  }

  public addUser() {
    this.userService.addUser(
        this.userForm.controls.usernameInput.value,
        this.userForm.controls.passwordInput.value,
        this.userForm.controls.userInput.value,
        this.userForm.controls.phoneInput.value)
    this.users = this.getUsers();
    this.dataSource = this.users;
  }

}
