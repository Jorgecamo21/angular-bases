
import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
    selector: 'app-dbz-lista',
    templateUrl: "./lista.component.html",
    styleUrl: './lista.component.css',
})
export class ListaDbzComponent {
  @Input()
  public personajeLista: Personaje[] = [{
    nombre:'Trunks',
    poder:5000,
  }]
  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();
  borrarPersonaje(index:string | undefined):void{
    this.onDeleteById.emit(index);
  }
 }
