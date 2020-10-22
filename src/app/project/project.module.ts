import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';

import { IconModule } from '@fundamental-ngx/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { NbMenuModule, NbRouteTabsetModule, NbCardHeaderComponent, NbCardModule, NbTabsetModule, NbSidebarModule } from '@nebular/theme';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NbMenuModule,
    DialogModule,
    TranslateModule,
    ProjectRoutingModule,
    FundamentalNgxCoreModule,
    IconModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbTabsetModule,
    NbSidebarModule.forRoot(),
  ],
  declarations: [ProjectComponent],
})
export class ProjectModule {}
