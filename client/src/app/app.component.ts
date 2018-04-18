import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public _loggedIn: boolean = false;

  public get loggedIn(): boolean {
    this._loggedIn = this.authService.loggedIn;
    return this._loggedIn;
  }

  constructor(public authService: AuthService) { }

  ngOnInit() { }
}
