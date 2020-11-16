import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Statee } from '@app/store/project/models';
import {
  select_projects,
} from '@app/store/project/projects.selectors';
import { update_project } from '@app/store/project/projects.actions';
import { Update } from '@ngrx/entity';
import { Project } from '@app/@shared/dto/Project';
import { project_service } from '@app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  id:any
  edit:  string="none"
  selected:  string
  projectt:{
    owner:"",
    name:"",
    code:"",
    bp:""
  }
  project:  any
  constructor(
    private project_:  project_service,
    private route: ActivatedRoute, 
    private store: Store<Statee>
    ){}
  ngOnInit() {
    this.route.params.subscribe((id:  any)=> this.id=id["id"])
    this.store.select(select_projects)
      .subscribe(projects=>  this.project=  projects[this.id])    
  }


  

proj:Update<Project>
  check_(e:  any){
    console.log(e.target.value);
    
    let changes={
      [e.target.name]:  e.target.value
    }
    this.proj={
      id:  this.id,
      changes:  changes
    }
    const proje=  this.proj
    this.project_.update(this.id,changes)
    this.store.dispatch(update_project({proje}));
  }
}
