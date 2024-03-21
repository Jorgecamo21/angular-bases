import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
public name :string = 'deadpool';
public age :number = 32;

get nombreMayus():string {
  return this.name.toUpperCase();
}

getdescripcion():string {
  return `${this.name} - ${this.age}`;
}

cambiaHeroe():void{
  var dict: {[key: number]: string} = {
    0: "spiderman",
    1: "flash",
    2: "hulk"
  }

  function randomGen() {
    var value = dict[Math.floor(Math.random() * Object.keys(dict).length)];
    return value;
  }
  this.name = randomGen();
}

cambiaEdad():void{
  function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  this.age = getRandomInt(100);
}
}
