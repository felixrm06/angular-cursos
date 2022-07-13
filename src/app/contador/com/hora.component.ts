import { NgForOf } from "@angular/common";
import { Component } from "@angular/core";
import { FormArray, NgForm, Validators } from "@angular/forms";


@Component({
    selector: 'app-hora',
    templateUrl :'horas.component.html',
    styleUrls:[ 'luna2.component.css' ],
})
export class horascom{
    hora: number=0;
    ho:number=0;
    dias:string [] = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
    sara:string='ahora son las:'.toUpperCase();
    lola:string='';
    hora1(){
        if(this.hora <24){
        this.hora +=1;
    }
    }
    hora2(){
        if(this.hora>0){
        this.hora -=1;
        }
    }
   /* horas ( valor:number){
        if(this.hora <=23){
        this.hora +=valor;
        }if( this.hora>=0 ){
            this.hora -=valor;
        }    
    }*/
    dia(){
       this.lola=this.dias.toString() || '';
    }
}




