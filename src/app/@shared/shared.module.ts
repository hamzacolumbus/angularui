import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './sidenav/sidenav.component';
import { FundamentalNgxCoreModule, IconModule } from '@fundamental-ngx/core';

@NgModule({
  imports: [CommonModule,  FundamentalNgxCoreModule,  IconModule],
  declarations: [SideComponent, HeaderComponent, LoaderComponent],
  exports: [SideComponent, HeaderComponent, LoaderComponent],
})
export class SharedModule {}
