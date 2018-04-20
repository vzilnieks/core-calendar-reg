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
  public loggedIn: boolean = false;

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn;
  }

  login() {
    this.authService.validateUser(this.loginForm.value);
    if (this.authService.loggedIn) {
      this.router.navigate(['admin']);
      this.loggedIn = true;
    }
  }

}
