import { AuthenticationState } from './auth.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const state = createFeatureSelector<AuthenticationState>('authentication');

export const register = createSelector(state, (auth) => auth.register);
export const token = createSelector(state, (auth) => auth.token);