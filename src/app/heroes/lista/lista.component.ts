import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
public nombreHeroes:string[] = ['Spiderman','Hulk','Ironman','Thor','Flash'];
public  borrado:string | undefined = 'XXXX';

borrarUltimo():void{
  // this.borrado = this.nombreHeroes[this.nombreHeroes.length-1];
  // this.nombreHeroes = this.nombreHeroes.splice(0,this.nombreHeroes.length-1);
  this.borrado = this.nombreHeroes.pop();
}
}
