/*
 *  Copyright (C) Paisaclub.com - All Rights Reserved
 *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  * Proprietary and confidential
 *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>
 *
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {FAQ} from '../../models/faq.model';
import {GlobalService} from './globals.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FAQService {
    constructor(private _http: HttpClient,
                private gobalService: GlobalService) {
    }

    getFAQs(): Observable<any> {
        return this._http.get(this.gobalService.API + '/posts');
    }


}