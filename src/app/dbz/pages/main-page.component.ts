import { Personaje } from './../interfaces/personaje.interface';
import { Component } from "@angular/core";
import { DbzService } from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
constructor(private dbzService:DbzService){}

get personajes() : Personaje[] {
  return [...this.dbzService.personajes];
}

onDeleteById(id:string):void{
  this.dbzService.onDeleteById(id)
}

onNewPersonaje(personaje:Personaje):void{
  this.dbzService.onNewPersonaje(personaje);
}

}

