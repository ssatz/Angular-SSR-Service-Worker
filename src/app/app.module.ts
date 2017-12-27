import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {MaterializeModule} from 'angular2-materialize';
import {FAQComponent} from './faq/faq.component';
import {FAQResolver} from './faq/faq.resolve';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
    declarations: [
        AppComponent,
        FAQComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        RouterModule,
        MaterializeModule,
        SharedModule,
        HttpClientModule,
        BrowserTransferStateModule
    ],
    providers: [FAQResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}
