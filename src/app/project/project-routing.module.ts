import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { AppRoutingModule } from '@app/app-routing.module';
import { ProjectComponent } from './project.component';
const routes: Routes = [
  {
    path: 'get_token',
    component: ProjectComponent,
    data: { title: marker('Project details') },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProjectRoutingModule {}
