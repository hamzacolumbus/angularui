import { Component, OnInit } from '@angular/core';
import '@ui5/webcomponents/dist/Button';

import '@ui5/webcomponents/dist/Icon.js';
import { FormGroup } from '@angular/forms';
import { NbWindowService } from '@nebular/theme';
import { FormComponent } from './create/create.component';
import { project_service } from '@app/services/project.service';
import { Project } from '@app/@shared/dto/Project';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Statee } from '@app/store/project/models';
import { select_all_projects } from '@app/store/project/projects.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  linearMode = true;
  str = '/projects/';
  constructor(
    private windserv: NbWindowService,
    private project: project_service,

    private router: Router,
    private store: Store<Statee>
  ) {}

  form = FormGroup;

  create() {
    this.windserv.open(FormComponent);
  }
  projects: Observable<Project[]>;

  ngOnInit() {
    this.projects = this.store.select(select_all_projects);
    this.isLoading = true;
    this.project.get_all();
    console.log(this.projects);
  }
  navigate(project: Project) {
    this.router.navigateByUrl('/project/' + project.AbsEntry, {
      state: project,
    });
  }
}