import { ActionReducerMap } from '@ngrx/store';
import { AuthenticationState, AuthenticationReducer } from './auth';
import { reducer, projects_reducer } from './project/projects.reducers';
import { StoreState, Statee } from './project/models';

export interface AppState {
  authentication: AuthenticationState;
  projects: Statee;
}

export const reducers: ActionReducerMap<AppState> = {
  projects: projects_reducer,
  authentication: AuthenticationReducer,
};
