import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/service-login/usuario'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "https://localhost:8004/api/login";

  constructor(private httpClient : HttpClient) { }

  LoginService(usuario:Usuario){
    return this.httpClient.post("https://localhost:8004/api/login", usuario);
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('Token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }
}
