import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor() {}
  project:  {
    name: ''
    type: ''
    BP_name: ''
    desc: ''
    priority: ''
    owner: ''
    responsible: ''
    ansprech: ''
    };



    
  verify(form:any){
    console.log(form);
    
  }
  ngOnInit(): void {
  }

}
