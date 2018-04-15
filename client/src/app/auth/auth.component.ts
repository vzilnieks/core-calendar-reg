import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  public loggedIn: Boolean = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  login() {
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', this.loginForm.get('username').value);
      this.loggedIn = true;
      this.router.navigate(['/admin']);
    } else {
      this.loggedIn = true;
    }
  }

}
