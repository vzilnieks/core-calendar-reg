import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from '../shared/classes/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(),  
    password: new FormControl()
  });

  public isLoggedIn: Observable<boolean>;

  public loggedUser(): string {
    return this.authService.getCurrentUserName();
  }

  private users: User[] = [];

  constructor(public router: Router, 
      private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    // this.userService.getUser().subscribe(users => this.users = users);
  }

  public login() {
    this.authService.login(this.loginForm.value.username);
    this.router.navigate(['']);
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
