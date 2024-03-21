import { NgModule } from "@angular/core";
import { ListaComponent } from "./lista/lista.component";
import { HeroeComponent } from "./heroe/heroe.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    HeroeComponent,
    ListaComponent,
  ],
  exports:[
    HeroeComponent,
    ListaComponent,
  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule{}
