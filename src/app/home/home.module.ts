import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardModule } from 'primeng/card';
import { SignupComponent } from './signup/signup.component';
import {
  FundamentalNgxCoreModule,
  FormModule,
  IconModule,
} from '@fundamental-ngx/core';
import { FormsModule } from '@angular/forms';
import {
  NbLayoutModule,
  NbStepperModule,
  NbCardModule,
  NbWindowModule,
} from '@nebular/theme';
import { FormComponent } from './create/create.component';
@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    HomeRoutingModule,
    CardModule,
    NbStepperModule,
    FundamentalNgxCoreModule,
    NbCardModule,
    NbWindowModule.forRoot(),
    IconModule,
  ],
  declarations: [HomeComponent, FormComponent, SignupComponent],
})
export class HomeModule {}
