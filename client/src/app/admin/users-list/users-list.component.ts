import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../shared/classes/user';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  private roles: string[] = [];
  private users$: Subscription;
  private displayedColumns = [ 'username', 'name', 'role_id' ];
  private dataSource = this.userService.getUsers();
  private userForm: FormGroup = new FormGroup({
    usernameInput: new FormControl('', [ Validators.required ]),
    passwordInput: new FormControl('', [ Validators.required ]),
    nameInput: new FormControl('', [ Validators.required ]),
    phoneInput: new FormControl(''),
  });
  private userRoleForm: FormGroup = new FormGroup({});

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers().subscribe();
    this.userService.getRole().subscribe(role => {
      this.roles.push(role);
    });
    this.roles.forEach(role => {
      this.userRoleForm.addControl(role, new FormControl(''));
    });
  }

  ngOnDestroy() {
    this.users$.unsubscribe();
  }

  private addUser() {
    this.users$ = this.userService.addUser(
        this.userForm.controls.usernameInput.value,
        this.userForm.controls.passwordInput.value,
        this.userForm.controls.nameInput.value,
        this.userForm.controls.phoneInput.value
      )
      .finally(() => this.dataSource = this.userService.getUsers())
      .subscribe();
  }

  private onUpdate(userId: number) {
    let rolesArray: number[] = [];
    this.roles.forEach((role, index) => {
      if (this.userRoleForm.get(role).value) {
        rolesArray.push(index);
      };
    });
    this.users$ = this.userService.updateUser(userId, rolesArray)
        .finally(() => this.dataSource = this.userService.getUsers())
        .subscribe();
  }

  private onDelete(userId: number) {
    this.userService.deleteUser(userId)
        .finally(() => this.dataSource = this.userService.getUsers())
        .subscribe();
  }

}
