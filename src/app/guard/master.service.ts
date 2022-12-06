import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsuarioService } from 'src/service-login/usuario.service';
import { LoginComponent } from 'src/app/login/login.component'

@Injectable()
export class MasterService implements HttpInterceptor {


  constructor(private usuarioService:UsuarioService, private login:LoginComponent) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const val = this.login.token;
        if(val != null){
      authReq = authReq.clone({
        setHeaders : {Authorization: `Bearer ${val}` }
      })
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass : MasterService,
    multi : true
  }
]

