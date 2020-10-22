import { createAction, props } from '@ngrx/store';
import { User, Create_dto } from '../../@shared/dto/User';

export const show_nav = createAction('[UI] navb');
export const hide_nav = createAction('[UI] navb');

export const login_request = createAction('[Auth] Request Login');
export const loggedin = createAction('[Auth] Loggedin');
export const check_auth = createAction('[Auth] Check');
export const checked = createAction('[Auth] Checked', props<{ authed: boolean }>());
export const signin_request = createAction('[Auth] Request Signin', props<{ register: Create_dto }>());
export const signedin = createAction('[Auth] Signedin');
export const logout_request = createAction('[Auth] Request Logout');
export const logout = createAction('[Auth] Logut');

export const loginin_failed = createAction('[Auth] Login Failure');
export const signin_failed = createAction('[Auth] Signin Failure');
export const logout_failed = createAction('[Auth] Logout Failure');
