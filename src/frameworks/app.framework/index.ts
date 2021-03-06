// libs
import {provideStore} from '@ngrx/store';
import {routerReducer, routerMiddleware, RouterState} from 'ngrx-store-router';

// app
import {nameListReducer} from './services/name-list.service';
import {MULTILINGUAL_PROVIDERS, MultilingualStateI, multilingualReducer} from '../i18n.framework/index';
import { PeopleService } from './services/person.service';
import { LineChartDirective } from './services/lineChart.service';

// state definition
export interface AppStoreI {
  router: RouterState;
  i18n: MultilingualStateI;
  names: Array<string>;
};

export const APP_PROVIDERS: any[] = [
  MULTILINGUAL_PROVIDERS,
  provideStore({ 
    router: routerReducer, 
    i18n: multilingualReducer,
    names: nameListReducer
  }),
  routerMiddleware
];

// services
export * from './services/app-config.service';
export * from './services/person.service';
export * from './services/lineChart.service';
export * from './services/name-list.service';
