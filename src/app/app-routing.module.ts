import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { SignupComponent } from './home/signup/signup.component';
import { Token } from './home/Access/access.component';

const routes: Routes = [
  {
    path: 'project/:id',
    component: ProjectComponent,
    data: { title: marker('Project details') },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
