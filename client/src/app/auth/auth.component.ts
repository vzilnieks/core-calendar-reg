import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from '../shared/classes/user';

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

  private _loggedUser: string;

  public get loggedUser(): string {
    return this.authService.getCurrentUserName();
  }

  private _showLoggedIn: boolean;

  public get showLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  private users: User[] = [];

  constructor(public router: Router, 
      private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    // this.userService.getUser().subscribe(users => this.users = users);
  }

  public login() {
    if (this.authService.validateUser(this.loginForm.value)) {
      this._showLoggedIn = true;
      this.router.navigate(['/admin']);
    } 
    this._showLoggedIn = false;
    this.router.navigate(['']);
  }

  public logout() {
    this.authService.logout();
  }

}
