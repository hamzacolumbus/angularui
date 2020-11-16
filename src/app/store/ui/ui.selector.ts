import { UI_state } from './ui.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const state = createFeatureSelector<UI_state>('ui');
export const navv = createSelector(state, (auth) => auth.navb);
