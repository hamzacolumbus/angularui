import {
  loggedin,
  login_request,
  loginin_failed,
  signedin,
  signin_request,
  signin_failed,
  logout,
  logout_failed,
  logout_request,
} from './auth.actions';

import { createReducer, on } from '@ngrx/store';

import { AuthenticationState } from './auth.state';

const initialAuthenticationState: AuthenticationState = {
  user: null,
  authed: false,

  register: null,
};

export const AuthenticationReducer = createReducer(
  initialAuthenticationState,
  on(signin_request, (state, { register }) => ({ ...state, isLoading: true, register: register })),
  on(signin_failed, (state) => ({ ...state, isLoading: false })),
  on(signedin, (state) => ({ ...state, isLoading: false })),
  on(loginin_failed, (state, payload) => ({ ...state, ...payload, isLoading: false })),
  on(logout_request, (state, user) => ({ ...state, isLoading: true, ...user })),
  on(logout_failed, (state) => ({ ...state, isLoading: false })),
  on(logout, (state) => ({ ...state, isLoading: false })),
  on(login_request, (state) => ({ ...state, isLoading: true })),

  on(loggedin, (state) => {
    return { ...state, ...initialAuthenticationState, isLoggingOut: false, isLoading: false };
  })
);
