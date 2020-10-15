import { Statee } from './models';
import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { on, createReducer, State, Action } from '@ngrx/store';
import { add_project, delete_project, update_project, get_project, get_projects } from './projects.actions';
import { Project } from '../interfaces';

export const adapter = createEntityAdapter<Project>({});

export const initial = adapter.getInitialState();

export const Reducer = createReducer(
  initial,
  on(add_project, (state, action) => adapter.addOne(action.project, state)),
  on(delete_project, (state, action) => adapter.removeOne(action.id, state)),
  on(update_project, (state, { project }) => adapter.updateOne(project, state)),
  on(get_project, (state, action) => adapter.removeOne(action.id, state))
);

export const { selectAll } = adapter.getSelectors();

export function reducer(state: Statee | undefined, action: Action) {
  return Reducer(state, action);
}
