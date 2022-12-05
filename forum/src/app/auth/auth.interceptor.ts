import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment} from '../../environments/environment';

const dataURL = environment.dataURL

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.startsWith('/api')){
      request = request.clone({url: request.url.replace('/api', dataURL), withCredentials:true})
    }
    return  next.handle(request);
  }
}
