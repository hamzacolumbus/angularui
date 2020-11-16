import { set_navb } from './ui.actions';

import { createReducer, on } from '@ngrx/store';

import { AuthenticationState } from './ui.state';

const initialAuthenticationState: AuthenticationState = {
  user: null,
  authed: false,

  register: null,
  navb: false,
};

export const AuthenticationReducer = createReducer(
  initialAuthenticationState,
  on(set_navb, (state, { show_nav }) => ({
    ...state,
    isLoading: true,
    show_nav: show_nav,
  }))
);
