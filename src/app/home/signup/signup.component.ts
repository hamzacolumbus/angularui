import { Component, OnInit } from '@angular/core';
import { AuthenticationState, signin_request } from '@app/store/auth';
import { Store, select } from '@ngrx/store';
import { User, Create_dto, Registartion_dto } from '@app/@shared/dto/User';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private store: Store<AuthenticationState>,
    private auth: AuthService
  ) {}
  signin: {
    name: '';
    adress: '';
    pw: '';
    pw_2: '';
  };
  user = {};
  error: boolean = false;
  ngOnInit(): void {
    /**     
     * 
    this.auth.get().subscribe((data: any) => {
    console.log(data);
    this.user = data;
    });
    console.log(this.user);
    
    */
  }
  verify(value: User) {
    value.pw == value.pw_2 ? this.create(value) : (this.error = true);
  }

  create(user_: User) {
    const user: Create_dto = {
      adress: user_.adress,
      pw: user_.pw,
    };
    this.store.dispatch(signin_request({ register: user }));
  }
}
