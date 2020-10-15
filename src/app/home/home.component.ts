import { Component, OnInit } from '@angular/core';
import '@ui5/webcomponents/dist/Card.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  constructor() {}

  ngOnInit() {
    this.isLoading = true;
  }
}
