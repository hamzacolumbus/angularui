import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardModule } from 'primeng/card';
import { SignupComponent } from './signup/signup.component';
import { FundamentalNgxCoreModule, FormModule } from '@fundamental-ngx/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,  FormsModule, HomeRoutingModule, CardModule,  FundamentalNgxCoreModule],
  declarations: [HomeComponent, SignupComponent, LoginComponent],
})
export class HomeModule {}
