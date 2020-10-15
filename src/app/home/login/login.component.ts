import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticationState, login_request } from '@app/store/auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AuthenticationState>, private client: HttpClient) {}
  ngOnInit() {}

  login() {
    this.store.dispatch(login_request());
  }
}
