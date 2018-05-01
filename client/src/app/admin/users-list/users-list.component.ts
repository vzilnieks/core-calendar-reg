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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
    this.userService.getRole().subscribe(role => {
      this.roles.push(role);
    });
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
	this.userForm.controls.phoneInput.value);
    this.users = this.getUsers();
    this.dataSource = this.users;
  }


}
