import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as from_projects from './projects.reducers';
import { Statee } from './models';
import { Project } from '@app/@shared/dto/Project';

export const state = createFeatureSelector<Statee>('projects');

export const select_all_projects = createSelector(
  state,
  from_projects.selectAll
);
export const select_projects = createSelector(
  state,
  from_projects.selectEntities
);

