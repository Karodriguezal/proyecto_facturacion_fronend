import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  autor:any;
  constructor(){
    this.autor={
        nombreGrupo:"Grupo4 - ",
        nombresIntegrantes:"Jeferson David Mesa Jurado - Jhojan Felipe Gaitán Hernández - Maicol Santiago Chala - Diego Araque - Karen Andrea Rodriguez Albornoz ",
        
      };
  }
}
