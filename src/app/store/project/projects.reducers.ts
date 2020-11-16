import { Statee } from './models';
import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { on, createReducer, State, Action } from '@ngrx/store';
import {
  add_project,
  delete_project,
  update_project,
  get_project,
  load_projects,
} from './projects.actions';
import { Project } from '@app/@shared/dto/Project';

export const adapter = createEntityAdapter<Project>({
  selectId: (project) => project.AbsEntry,
});

export const initial = adapter.getInitialState();

export const projects_reducer = createReducer(
  initial,
  on(add_project, (state, action) => adapter.addOne(action.project, state)),
  on(load_projects, (state, action) => adapter.addAll(action.projects, state)),
  on(delete_project, (state, action) => adapter.removeOne(action.id, state)),
  on(update_project, (state,  action) => adapter.updateOne(action.proje, state)),
);

export const { selectAll, selectEntities } = adapter.getSelectors();

export function reducer(state: Statee | undefined, action: Action) {
  return projects_reducer(state, action);
}
