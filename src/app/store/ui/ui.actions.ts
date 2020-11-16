import { createAction, props } from '@ngrx/store';
export const set_navb = createAction(
  '[UI] navb',
  props<{ show_nav: boolean }>()
);
