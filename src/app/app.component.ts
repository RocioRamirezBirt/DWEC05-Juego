import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'; 

export interface datosJuego {
  nombre: string,
  apellido: string,
  rango: number,
  intentos: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'DWEC05-Rocio Ramirez';
  
  configuracion: datosJuego = {
    nombre: " ",
    apellido: " ",
    rango:0,
    intentos:0
  };

  // public nombre = new FormControl('',Validators.required)
  // public apellido = new FormControl('',Validators.required)



  recogerDatos():void{
    if(this.configuracion.nombre && this.configuracion.apellido && this.configuracion.rango && this.configuracion.intentos){
        



    }else {
        alert('Complete todo los campos del formulario')
    }
  }
}