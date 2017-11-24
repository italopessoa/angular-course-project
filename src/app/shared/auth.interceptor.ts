import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepted: ", req);
    const copiedRequest = req.clone({ params: req.params.set('auth', this.authService.getToken()) })
    return next.handle(copiedRequest);
  }
}
