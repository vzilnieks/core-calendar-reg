import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  private _loggedIn: boolean = false;

  public get loggedIn(): boolean {
    return this.authService.loggedIn;
  }

  constructor(private authService: AuthService) { }

  ngOnInit() { }
}
