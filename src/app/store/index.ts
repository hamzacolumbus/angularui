import { ActionReducerMap } from '@ngrx/store';
import { AuthenticationState, AuthenticationReducer } from './auth';
import { EffectSources } from '@ngrx/effects';

export interface AppState {
  authentication: AuthenticationState;
}

export const reducers: ActionReducerMap<AppState> = {
  authentication: AuthenticationReducer,
};
