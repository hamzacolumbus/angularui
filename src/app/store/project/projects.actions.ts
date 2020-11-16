import { createAction, props } from '@ngrx/store';
import { Project } from '../../@shared/dto/Project';
import { Update } from '@ngrx/entity';

export const load_projects = createAction(
  '[Project] Get Projects',
  props<{ projects: Project[] }>()
);

export const get_project = createAction(
  '[Project] Get Project',
  props<{ id: number }>()
);

export const add_project = createAction(
  '[Project] Add New Project',
  props<{ project: Project }>()
);

export const delete_project = createAction(
  '[Project] Del Project',
  props<{ id: number }>()
);

export const update_project = createAction(
  '[Project] Upd Project',
  props<{ proje: Update<Project> }>());
