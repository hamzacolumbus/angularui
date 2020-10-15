import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as from_projects from './projects.reducers';
import { Statee } from './models';

export const select_projects_state = createFeatureSelector<Statee>('project');

export const select_all_projects = createSelector(select_projects_state, from_projects.selectAll);

export const select_project = createSelector(select_projects_state, from_projects.selectAll);
