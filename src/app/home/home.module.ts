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
import { NbLayoutModule, NbStepperModule, NbCardModule, NbWindowModule } from '@nebular/theme';
import { FormComponent } from './form/form.component';
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
    NbWindowModule.forRoot()
  ],
  declarations: [HomeComponent,FormComponent,  SignupComponent],
})
export class HomeModule {}
