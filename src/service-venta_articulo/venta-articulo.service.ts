import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VentaArticulo } from 'src/service-venta_articulo/venta-articulo'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class VentaArticuloService {

  private baseURL = "https://localhost:8004/api/ventas";

  constructor(private httpClient : HttpClient) { }

  obtenerListaArticulo():Observable<VentaArticulo[]>{
    return this.httpClient.get<VentaArticulo[]>(`${this.baseURL}`);
  }

  chartInfo(){
    return this.httpClient.get("https://localhost:8004/api/ventas");
  }
  
}
