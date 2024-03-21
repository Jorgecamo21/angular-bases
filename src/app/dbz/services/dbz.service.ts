import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import {v4 as uuid} from 'uuid';
import { filter } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DbzService {
  public personajes: Personaje[] = [{
    id: uuid(),
    nombre: 'Krillin',
    poder: 500,
  },{
    id: uuid(),
    nombre:'Goku',
    poder:100000,
  },{
    id: uuid(),
    nombre:'Vegeta',
    poder:8000,
  }];

  onNewPersonaje(personaje: Personaje):void{
    const newPersonaje: Personaje = {
      id:uuid(),...personaje
    }
    this.personajes.push(newPersonaje);
  }

  // onDelete(indice:number):void{
  // this.personajes.splice(indice,1);
  // }

  onDeleteById(id:string):void{
    this.personajes = this.personajes.filter(personaje => personaje.id != id);
  }
}

