import { Component, OnInit } from '@angular/core';
import { project_service } from '@app/services/project.service';

@Component({
  selector: 'app-form',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private projects:  project_service){}
  ProjectType:  string

  project:{
    AllowSubprojects:"",
    BusinessPartner:"",
    BusinessPartnerName:"",
    ContactPerson:"",
    FinancialProject:"",
    Industry:"",
    Owner:"",
    ProjectName:"",
    ProjectStatus:"",
    ProjectType:"",
    Reason:"",
    RiskLevel:"",
    SalesEmployee:"",
    Territory:"",
  };
  verify(form: any) {
    console.log(form);
  }
  save(){
    console.log(this.project);
    this.projects.create(this.project)
  }
  ngOnInit(): void {}
}
