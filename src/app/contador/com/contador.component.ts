import { Component  } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`

    <h1>{{ title }}</h1>
<h3>la base es: <strong (click)="base">{{ base }}</strong></h3>
<button (click)="acumular(+5)"> +5 </button>
<span> {{ base }}</span>
<button (click)="acumular(-5)"> -5 </button>
`
})
export class Contador {

    public title: string = 'bases02';
    numeros: number=0;
    sumar(){
     this.numeros +=1;
    }
    restar(){
     this.numeros -=1;
    }
    base: number=55;
   
    acumular( valor: number){
     this.base +=valor;
    }

}