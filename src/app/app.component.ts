import { Component, OnInit, OnDestroy, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ResolveEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { PrimeNGConfig } from 'primeng/api';
import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { I18nService } from '@app/i18n';
const log = new Logger('App');

import { navv } from "./store/auth/auth.selector";
import '@ui5/webcomponents/dist/Button';
import { Store, select } from '@ngrx/store';
import { AuthenticationState, show_nav, hide_nav } from './store/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  show:  boolean
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private i18nService: I18nService,
    private store:  Store<AuthenticationState>
  ) {}


  showw(url:  string){
    url=="/signup"  ||  url=="/home"?  this.show=false  :  this.show=  true
  }
  ngOnInit() {
    this.router.events.subscribe((url) => {
      if(url instanceof ResolveEnd){
        this.showw(url.url)
        console.log(url.url); 
    }})
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }
    log.debug('init');
    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));
    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((event) => {
        const title = event.title;
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });
  }

 

  ngOnDestroy() {
    this.i18nService.destroy();
  }
  
}
