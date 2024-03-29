import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable} from "rxjs";
@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const modifiedRequest = request.clone({
    //   setHeaders: {
    //     'Access-Control-Allow-Origin': 'https://pfacliniquesolis.cellardoor.info',
    //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //     'Access-Control-Allow-Credentials': 'true'
    //   }
    // });
    const modifiedRequest = request.clone();
    return next.handle(modifiedRequest);
  }
}
