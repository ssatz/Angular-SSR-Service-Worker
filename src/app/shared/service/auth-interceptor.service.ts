import {Injectable, Inject} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {DOCUMENT} from '@angular/common';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(@Inject(DOCUMENT) private document: any) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
        }
        req = req.clone({headers: req.headers.set('Accept', 'application/json')});
        return next.handle(req);
    }
}