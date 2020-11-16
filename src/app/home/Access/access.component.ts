import { Component, OnInit } from '@angular/core';
import { AuthenticationState, set_token } from '@app/store/auth';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './access.component.html',
})
export class Token implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,

    private store: Store<AuthenticationState>
  ) {}
  token = {};
  ngOnInit(): void {}
}
