import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/services/articulo'
import { ArticuloService } from 'src/services/articulo.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';


@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css']
})
export class ListaArticuloComponent implements OnInit {
  articulos:Articulo[];

  constructor(private articuloServicio:ArticuloService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerArticulo();
  }
   
  analiticas(){
    this.router.navigate(['/lista-ventas']);
  }

  crear(){
    this.router.navigate(['/registrar-articulo']);
  }

  actualizarArticulo(cod_barras:string){
    this.router.navigate(['actualizar-articulo', cod_barras]);
  }

  eliminarArticulo(cod_barras:string){
    this.articuloServicio.eliminarArticulo(cod_barras).subscribe(dato => {
      this.obtenerArticulo();
    })
  }

  private obtenerArticulo(){
    this.articuloServicio.obtenerListaArticulo().subscribe(dato =>{
      this.articulos = dato;
    });

  }

}
