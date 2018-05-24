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
    return this.authService.getCurrentUserName();
  }

  private _showLoggedIn: boolean;

  public get showLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  constructor(public router: Router, private authService: AuthService) { }

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
