import { Component, OnInit } from '@angular/core';
import '@ui5/webcomponents/dist/Button';

import '@ui5/webcomponents/dist/Icon.js';
import { FormGroup } from '@angular/forms';
import { NbWindowService } from '@nebular/theme';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  linearMode=  true
  constructor(
    private windserv:  NbWindowService
  ) {}

  form= FormGroup



  create(){
    this.windserv.open(FormComponent);
  }
  ngOnInit() {
    this.isLoading = true;
  }



}
