import { Injectable } from '@angular/core';

import data from './data.json';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  url: string = './data.json';
  constructor() {}

  get() {
    return data as [];
  }
}
