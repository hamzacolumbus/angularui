import { EntityState, Update } from '@ngrx/entity';
import { Project } from '@app/@shared/dto/Project';

export interface StoreState {
  project: Statee;
}

export interface Statee extends EntityState<Project> {}
