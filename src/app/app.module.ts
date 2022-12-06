import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaArticuloComponent } from './lista-articulo/lista-articulo.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarArticuloComponent } from './registrar-articulo/registrar-articulo.component';
import { FormsModule } from '@angular/forms';
import { ActualizarArticuloComponent } from './actualizar-articulo/actualizar-articulo.component';
import { ArticuloDetallesComponent } from './articulo-detalles/articulo-detalles.component';
import {  MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListaVentaarticuloComponent } from './lista-ventaarticulo/lista-ventaarticulo.component';
import { LoginComponent } from './login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,
    ListaArticuloComponent,
    RegistrarArticuloComponent,
    ActualizarArticuloComponent,
    ArticuloDetallesComponent,
    ListaVentaarticuloComponent,
    LoginComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    NgxPaginationModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
