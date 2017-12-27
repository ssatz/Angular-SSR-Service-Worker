/*
 *  Copyright (C) Paisaclub.com - All Rights Reserved
 *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  * Proprietary and confidential
 *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>
 *
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterializeDirective, MaterializeModule} from 'angular2-materialize';
import {RouterModule} from '@angular/router';
import {FAQService} from './service/faq.service';
import {GlobalService} from './service/globals.service';
import {AuthInterceptor} from './service/auth-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, MaterializeModule, ReactiveFormsModule],
    declarations: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        GlobalService,
        FAQService],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterializeModule,
        MaterializeDirective

    ],
})

export class SharedModule {
}


