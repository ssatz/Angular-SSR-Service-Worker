import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {FAQService} from "../shared/service/faq.service";
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/do';
const FAQ_KEY = makeStateKey<any>('faq.result');
@Injectable()
export class FAQResolver implements Resolve<any> {
    private result: any;

    constructor(private _faqService: FAQService, private readonly transferState: TransferState) {
    }

    resolve(_route: ActivatedRouteSnapshot): Observable<any> {
        const found = this.transferState.hasKey(FAQ_KEY);
        if (found) {
            const res = Observable.of(this.transferState.get<any>(FAQ_KEY, null));
            this.transferState.remove(FAQ_KEY);
            return res;
        }
        this.transferState.onSerialize(FAQ_KEY, () => this.result);
        return this._faqService.getFAQs();

    }
}