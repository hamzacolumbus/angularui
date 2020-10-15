import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';

import { IconModule } from '@fundamental-ngx/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, DialogModule, TranslateModule, ProjectRoutingModule,  FundamentalNgxCoreModule,  IconModule],
  declarations: [ProjectComponent],
})
export class ProjectModule {}
