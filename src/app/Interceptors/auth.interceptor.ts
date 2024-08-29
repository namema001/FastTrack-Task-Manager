import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from "@angular/common/http";
import { inject } from "@angular/core";
import { take, exhaustMap } from "rxjs";
import { AuthService } from "../Services/auth.service";


export class AuthInterceptorService implements HttpInterceptor{
  authService: AuthService = inject(AuthService);

  intercept(req: HttpRequest<any>, next: HttpHandler){
      return this.authService.user.pipe(take(1), exhaustMap(user => {
          if(!user){
              return next.handle(req);
          }
          const modifiedReq = req.clone({
              params: new HttpParams().set('auth', user.token
          )})
          return next.handle(modifiedReq)
      }));
  }
}
