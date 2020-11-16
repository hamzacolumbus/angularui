import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as reducers from './projects.reducers';

@NgModule({
  imports: [StoreModule.forFeature('project', reducers.projects_reducer)],
})
export class ProjectModule {}
