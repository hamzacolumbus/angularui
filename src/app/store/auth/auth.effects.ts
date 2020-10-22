import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import * as auth_acts from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}


  
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(auth_acts.login_request),
        tap(() => {
          this.authService.login();
        })
      ),
    { dispatch: false }
  );

  loggedin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(auth_acts.loggedin),
        tap(() => {
          //redirect
          this.router.navigateByUrl('login');
        })
      ),
    { dispatch: false }
  );

  registered$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(auth_acts.signedin),
        tap(() => {
          //redirect login
        })
      ),
    { dispatch: false }
  );
  register$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(auth_acts.signin_request),
        tap(() => {
          this.authService.signin();
        })
      ),
    { dispatch: false }
  );
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(auth_acts.logout_request),
      tap(() => {
        console.log('test');
      })
    )
  );
}
