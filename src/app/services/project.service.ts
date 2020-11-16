import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Project } from '@app/@shared/dto/Project';
import { load_projects } from '@app/store/project/projects.actions';
import { Store } from '@ngrx/store';
import { Statee } from '@app/store/project/models';
import { projects_reducer } from '@app/store/project/projects.reducers';

@Injectable({ providedIn: 'root' })
export class project_service {
  private SERVER_URL = 'http://localhost:8085/';

  constructor(private client: HttpClient, private store: Store<Statee>) {}

  handleError(error: HttpErrorResponse) {
    console.log('handle error');
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  get_all() {
    this.client.get('http://localhost:8085/projects/', {}).subscribe((data) => {
      let projects= data['data']
      this.store.dispatch(load_projects({projects: projects}));
    });
  }
  get_one(id: any) {
    this.client
      .get('http://localhost:8085/projects/:id', {})
      .subscribe((data) => console.log(data));
  }

  delete_one(id: any) {
    this.client
      .delete('http://localhost:8085/projects/:id', {})
      .subscribe((data) => console.log(data));
  }

  update(id: any,  data  :any) {
    this.client
      .patch('http://localhost:8085/projects/'+id,data)
      .subscribe((data) => console.log(data));
  }

  create(project:  any){
    this.client
      .post('http://localhost:8085/projects', project)
      .subscribe();
  }
}
