import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: any;
  isExpanded = true;
  state = 'collapsed';
  display: boolean = false;
  constructor(private s: ProjectService) {}

  ngOnInit() {}

  open() {
    this.display = true;
  }
  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }
}
