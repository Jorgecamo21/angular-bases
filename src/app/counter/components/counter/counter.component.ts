import { Component, OnInit } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `<p>Counter: {{counter}}</p>
  <button (click)="sumar()">Sumar</button>
  <button (click)="restar()">Restar</button>
  <button (click)="resetear()">Resetear</button>
  `
})
export class CounterComponent {
  public title:string = 'Mi primera app de Angular ';
  public counter:number = this.title.length;

  sumar():void{
   this.counter +=1;
  }

  restar():void{
   this.counter -=1;
  }

  resetear():void{
   this.counter =this.title.length;
  }
 }
