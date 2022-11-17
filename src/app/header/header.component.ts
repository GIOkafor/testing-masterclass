import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.initUser();
  }

  initUser(){
    return this.auth.user().subscribe(user => {
      user ? this.loggedIn = true : this.loggedIn = false;
    });
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
