import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public loggedIn: Boolean = true;

  ngOnInit() {
    // if (localStorage.getItem('user')) {this.loggedIn = true}
  }
}
