import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    const authHeader = this.auth.authHeader;
    // Clone the request to add the new header.
    // Need to enable CORS for this to work
    // const authReq = request.clone({ headers: request.headers.set('Authorization', authHeader) });

    const authenticatedRequest = request.clone();
    console.log(authenticatedRequest);
    return next.handle(authenticatedRequest);
  }

}
