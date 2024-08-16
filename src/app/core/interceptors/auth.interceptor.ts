import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from "../services/local-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.getItem('token');
    const ignore = [
      'login',
      'register',
      'forgot-password',
      'reset-password',
      'realisations',
      'contact',
    ];
    // if (ignore.some(i => request.url.includes(i))) {
    //if current route not contains 'admin' then not add token to the request
    if (!this.router.url.includes('admin')) {
      return next.handle(request);
    }

    if (token) {
      request = request.clone({
        setHeaders: {
          "auth-token": `${token}`,
        },
          // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, auth-token",
      });
    } else {
      this.router.navigate(['/auth/login']).then(r => console.log(r));
    }
    return next.handle(request);
  }
}
