import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private store: Store<fromApp.AppState>) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepted: ", req);

    return this.store.select('auth').switchMap((authState: fromAuth.State) => {
      const copiedRequest = req.clone({ params: req.params.set('auth', authState.token) })
      return next.handle(copiedRequest);
    });
  }
}
