import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import {
  AuthenticationState,
  loggedin,
  register,
  signedin,
  signin_failed,
  token,
} from '@app/store/auth';
import { Create_dto } from '@app/@shared/dto/User';
import { __await } from 'tslib';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated(): Boolean {
    throw new Error('Method not implemented.');
  }

  private SERVER_URL = 'http://localhost:8085/user';

  constructor(
    private client: HttpClient,
    private store: Store<AuthenticationState>
  ) {}

  handleError(error: HttpErrorResponse) {
    console.log('handle error');
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  login() {
    return this.client
      .get('http://localhost:8085/login')
      .pipe(catchError(this.handleError));
  }

  send(user: Create_dto) {
    console.log(user);
    this.client
      .post('http://localhost:8085/signin', {
        user: {
          email: user.adress,
          password: user.pw,
        },
      })
      .subscribe();
  }
  signin() {
    let user;
    const register$ = this.store
      .pipe(select(register))
      .subscribe((value) => (user = value))
      .add(this.send(user));
  }

  public get() {
    return this.client
      .get(this.SERVER_URL, { withCredentials: true })
      .pipe(catchError(this.handleError));
  }

  user() {
    const token$ = this.store.pipe(select(token)).subscribe()
    console.log(token$);
    this.client.post(
      "http://localhost:8085/user",
      { withCredentials: true }
      ).subscribe()

  }

}
