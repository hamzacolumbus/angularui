import { Component,ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],    
  changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
      :host nb-tab {
        padding: 1.25rem;
      }`]
})
export class ProjectComponent implements OnInit {
  ngOnInit(){
    
  }
}
