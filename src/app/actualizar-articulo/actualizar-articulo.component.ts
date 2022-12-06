import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/services/articulo';
import { ArticuloService } from 'src/services/articulo.service';



@Component({
  selector: 'app-actualizar-articulo',
  templateUrl: './actualizar-articulo.component.html',
  styleUrls: ['./actualizar-articulo.component.css']
})
export class ActualizarArticuloComponent implements OnInit {
  
  cod_barras:string;
  articulo:Articulo = new Articulo();
  
  constructor(private articuloService:ArticuloService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cod_barras = this.route.snapshot.params['cod_barras'];
    this.articuloService.obtenerArticuloId(this.cod_barras).subscribe(dato =>{
      this.articulo = dato;
    },error => console.log(error));
  }

  irAlaListaDeArticulos(){
    this.router.navigate(['/articulo']);
  }

  onSubmit(){
    this.articuloService.actualizarArticulo(this.cod_barras,this.articulo).subscribe(dato => {
      this.irAlaListaDeArticulos();
    },error => console.log(error));
  }

}
