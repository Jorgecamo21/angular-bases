import {  Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
    selector: 'app-dbz-crear-personaje',
    templateUrl: './crear-personaje.component.html',
    styleUrl: './crear-personaje.component.css',
})
export class CrearPersonajeComponent {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();
  public personaje: Personaje = {
    nombre: '',
    poder: 0
  }
 enviarForm():void{
    console.log(this.personaje);
    if (this.personaje.nombre.length == 0) {
        return
    }
    this.onNewPersonaje.emit({...this.personaje}); // He tenido que hacer esto por que si no se pasaban los valores por referencia
    this.personaje.nombre = '';
    this.personaje.poder = 0;
 }
 }
