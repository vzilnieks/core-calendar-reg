import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(),  
    password: new FormControl()
  });

  private _loggedUser: string;

  public get loggedUser(): string {
    this._loggedUser = this.authService.getCurrentUserName();
    return this._loggedUser;
  }

  private _showLoggedIn: boolean;

  public get showLoggedIn(): boolean {
    this._showLoggedIn = this.authService.loggedIn;
    return this._showLoggedIn;
  }

  constructor(public router: Router, private authService: AuthService) { }

  login() {
    if (this.authService.validateUser(this.loginForm.value)) {
      this._showLoggedIn = true;
      this.router.navigate(['/admin']);
    } 
    this._showLoggedIn = false;
    this.router.navigate(['']);
  }

  logout() {
    this.authService.logout();
  }

}
