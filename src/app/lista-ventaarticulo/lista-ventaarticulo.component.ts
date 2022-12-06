import { Component, OnInit } from '@angular/core';
import { VentaArticuloService } from 'src/service-venta_articulo/venta-articulo.service';
import { VentaArticulo } from 'src/service-venta_articulo/venta-articulo';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';
Chart.register(...registerables); 
@Component({
  selector: 'app-lista-ventaarticulo',
  templateUrl: './lista-ventaarticulo.component.html',
  styleUrls: ['./lista-ventaarticulo.component.css']
})

export class ListaVentaarticuloComponent implements OnInit {

  constructor( private ventaService:VentaArticuloService, private router:Router ) 
  {
    
  }
 

  ngOnInit(): void {
    this.ventaService.chartInfo().subscribe(result => {
      this.chart = result;
      if(this.chart != null){
        for (let i=0; i<this.chart.length; i++){
          console.log(this.chart[i]);
          this.labelData.push(this.chart[i].cod_barras);
          this.realData.push(this.chart[i].cantidad);
          this.colorData.push(this.chart[i].cambio_precio);
        }
        this.createChart(this.labelData,this.realData,this.colorData);
      }
    });
  }

  retorno(){
    this.router.navigate(['/articulo']);
  }

  

  public chart: any;
  labelData:any[]=[];
  realData:any[]=[];
  colorData:any[]=[];
   
  createChart(labelData:any, realData:any, colorData:any){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: labelData, 
	       datasets: [
          {
            label: "Cantidad Vendida",
            data: realData,
            backgroundColor: [colorData, 'blue', 
            'limegreen',  
            'rgba(245, 40, 145, 0.8)',
            'rgba(245, 39, 39, 0.8)',
            'rgba(29, 197, 215, 0.8)',
            'rgba(215, 29, 85, 0.8)',
            'rgba(135, 29, 215, 0.8)',
            'rgba(29, 215, 143, 0.8)',
            'rgba(255, 241, 67, 0.8)',
            'rgba(68, 43, 159, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
