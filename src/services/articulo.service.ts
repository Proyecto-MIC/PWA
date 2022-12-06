import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from 'src/services/articulo'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private baseURL = "https://localhost:8004/api/articulo";

  constructor(private httpClient : HttpClient) { }

  obtenerListaArticulo():Observable<Articulo[]>{
    return this.httpClient.get<Articulo[]>(`${this.baseURL}`);
  }

  registrarArticulo(articulo:Articulo) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, articulo);
  }

  obtenerArticuloId(cod_barras:string) : Observable<Articulo>{
    return this.httpClient.get<Articulo>(`${this.baseURL}/${cod_barras}`);
  }
  
  actualizarArticulo(cod_barras:string, articulo:Articulo) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${cod_barras}`, articulo);
  }

  eliminarArticulo(cod_barras:string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${cod_barras}`);
  }

  

  
}
