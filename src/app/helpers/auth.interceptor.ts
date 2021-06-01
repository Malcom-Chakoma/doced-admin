import { Router } from '@angular/router';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInteceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //   console.log(this.authService.Token)
    if (!!this.authService.Token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' +this.authService.Token),
      });

      return next.handle(cloned).pipe(
        tap(
          () => {},
          (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this.router.navigateByUrl('landing');
              }
            } else {
              console.log(err);
            }
          }
        )
      );
    } else {
      return next.handle(req);
    }
  }
}