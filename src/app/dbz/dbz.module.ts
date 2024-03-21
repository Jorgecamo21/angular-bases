import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListaDbzComponent } from './components/lista/lista.component';
import { CrearPersonajeComponent } from './components/crear-personaje/crear-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent,ListaDbzComponent,CrearPersonajeComponent],
  exports:[MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
