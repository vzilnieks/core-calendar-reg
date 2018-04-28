import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  public loggedUser: string;
  public showLoggedIn: boolean;

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loggedUser = this.authService.getCurrentUserName();
    this.showLoggedIn = this.authService.loggedIn;
  }

  login() {
    if (this.authService.validateUser(this.loginForm.value)) {
      this.showLoggedIn = true;
      this.router.navigate(['/admin']);
    } else { 
      this.showLoggedIn = false;
      this.router.navigate(['']);
    }
  }

  logout() {
    this.authService.logout();
  }

}
