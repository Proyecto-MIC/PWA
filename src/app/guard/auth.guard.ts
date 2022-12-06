import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/service-login/usuario.service';
import { Usuario } from 'src/service-login/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  usuario: Usuario  = new Usuario();
  constructor(private usuarioService:UsuarioService, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.usuarioService.isLoggedIn()){
        return true;
      }  
    this.router.navigate(['/login']);
    return false;
  }
 
}
