import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/service-login/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/service-login/usuario.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loginData = {
    "user_name" : '',
    "password" : ''
  }


  token = 'eyJhbGciOiJSU0EyNTYiLCJ0eXAiOiJKV1QifQ.eyJhY2Nlc190eXBlIjoib2ZmbGluZSIsImV4cCI6IjE2NjcwMDc2MDAiLCJpYXQiOiIxNjY3MDAxNjAwIn0.aZT4IjPgaOA8cKIGfqk3HoPc33gF1QReH2mwKGsicajGQyQX_ySkrK94oL56IQqI2L0C0GSCR7-jKNcYoB0E76yCeB_ajK3O_kJL3wtt-4DnwBHyY10yur6d1ccwuXAccP6FWmDXEeWh46iJpbmnig5sFhAOTIk03mkDckCOzUKtGu7D7kDntYfo0XkFwWP2rD4gesxwnJYHq7SfEPUuRgOGYUipcgDasjzKtzK58yLM8gjRijXKG7ZTUlA_bK7ZZAWkiDM69IN9sxoKQ9gPTkt5WRKUSJhIDm5zaWU0z40D9m0yKu5ZRsuV0A1PqBSIy1gfE2x8BGGHyU67fVmbiMFhY5EcWUS9N-m931vqryIIpc_Q3-2eUUa5qK7JmxV1VEJNCGgx_dlt_bgpeyigbjTfFWPGO4EEuUk9OU4d6ry2frUA3Wgz8yFOjudr5Xwo5WGtTW9vjlHLJLSz3nOjkmYFsZkVqOji0GkMu9BAr099e7EDbQ-4oMFs9EiMLKVL5onVf_QAkfK_3DMNKwYNFQG0mwQv_Ky4vY5sIC41r7KDir54mt5_-h514wbrjIBzwTHrWIhFr3lQjvNNnSl-o31oQhkQtZVFMwu0Jp3BIK-vMe4mA6V-U4RkLnnYrkqXQiJ61Z45FQDUbO1RWhzS3hYO-apX7NxtSjZc12sir5s';
  rol = 'administrador';
  sup = 'supervisor';
  usuario: Usuario  = new Usuario();
  constructor(private usuarioService:UsuarioService, private router:Router, private activatedRoute:ActivatedRoute ) { 
    
  }
  
  
  ngOnInit(): void {
    
  }
  
  formSubmit(){
    if(this.usuario.user_name.trim() == '' || this.usuario.user_name.trim() == null){
      return;
    }
    
    if(this.usuario.password.trim() == '' || this.usuario.password.trim() == null){
      return;
    }
    if(this.usuario.tipo_usuario = this.rol){
      this.usuario.Token = this.token;
      this.usuarioService.LoginService(this.usuario).subscribe(dato => {
        this.router.navigate(['/lista-ventas']);
        localStorage.setItem('Token', JSON.stringify(this.token));
        var decoded = jwt_decode(this.token);
        console.log(decoded)
      }, error => console.log(error)
     )
    }
    if(this.usuario.tipo_usuario = this.sup){
      this.usuarioService.LoginService(this.usuario).subscribe(dato => {
        this.router.navigate(['/articulo']);
      }, error => console.log(error)
     )
    }
   
  }

}
