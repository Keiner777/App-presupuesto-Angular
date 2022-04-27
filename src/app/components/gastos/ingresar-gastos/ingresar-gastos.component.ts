import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent implements OnInit {

  nombreGasto: string;
  cantidad:number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad =  0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = ' ';
   }

  ngOnInit(): void {
  }

  agregarGasto(){

    if(this.cantidad> this._presupuestoService.restante){

      this.formularioIncorrecto= true;
      this.textIncorrecto = 'Cantidad Ingresada es mayor al restante';
      return

    }


    if(this.nombreGasto ==='' || this.cantidad <=0){

      this.formularioIncorrecto= true;
      this.textIncorrecto = ' gasto o cantidad incorrecta';

    }else{

      // Creamos un objeto 
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad

      }


      // Enviamos el objeto a los suscriptores via subjet 

      this._presupuestoService.agregarGasto(GASTO);












      this.formularioIncorrecto= false;
      this.nombreGasto = '';
      this.cantidad = 0;

    }
  }

}
