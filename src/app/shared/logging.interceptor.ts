import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { from } from "rxjs/observable/from";
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do(
      event => {
        console.log("Logging intercepted: ", event);
      }
    );
  }
}
