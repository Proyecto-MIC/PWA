import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/services/articulo';
import { ArticuloService } from 'src/services/articulo.service';
@Component({
  selector: 'app-registrar-articulo',
  templateUrl: './registrar-articulo.component.html',
  styleUrls: ['./registrar-articulo.component.css']
})
export class RegistrarArticuloComponent implements OnInit {
   
  articulo: Articulo  = new Articulo();
  constructor(private articuloService:ArticuloService, private router:Router) { }

  ngOnInit(): void {

  }

  guardarArticulo(){
    this.articuloService.registrarArticulo(this.articulo).subscribe(dato => {
      console.log(dato);
      this.retorno();
    }, error => console.log(error)
   )
  }
   
  retorno(){
    this.router.navigate(['/articulo']);
  }
  onSubmit(){
   this.guardarArticulo();
  }

}
