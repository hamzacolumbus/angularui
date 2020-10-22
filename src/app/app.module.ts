import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectModule } from './project/project.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effects';
import { IconModule, FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { NbThemeModule, NbLayoutModule, NbSidebarComponent, NbSidebarModule } from '@nebular/theme';
@NgModule({
  imports: [
    ProjectModule,
    IconModule,
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    NbThemeModule.forRoot(),
    CoreModule,
    SharedModule,
    NbLayoutModule,
    HomeModule,
    FormsModule,
    FundamentalNgxCoreModule,
    IconModule,
    NbSidebarModule.forRoot(),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([AuthEffects]),
    AppRoutingModule, // must be imported as the last module as it contains the fallback route,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
