import { Component} from '@angular/core'

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: [ './heroe.component.css' ],

})
export class HeroeComponent{
    name:string='Luna orejon ceras';
    edad: string='22';
    direccion:string='villa maria';
    pais:string='peru';
    lugar_nacimiento: string='villa maria';
    Carrera_profesional: string='Computacion e Informatica';
    datos: string='Datos Actuales'.toUpperCase();
    obtenernombre(){
        return `${ this.name.toUpperCase() } - ${this.edad.toUpperCase()}`
    }
    datascience(){
        return `${ this.Carrera_profesional.toUpperCase() }`
    }
    
    cambiarnombre(): void{
    this.name='felix eduardo Ramirez Baldeon'.toUpperCase();
    this.edad='25'.toUpperCase();
    this.direccion='san juan'.toUpperCase();
    this.pais='peru'.toUpperCase();
    this.lugar_nacimiento='pisco peru'.toUpperCase();
    this.Carrera_profesional='vendedor de churros en mi pueblo querido de cabracancha.'.toUpperCase();
    this.datos='Los datos han sido cambiados'.toUpperCase();
    }
}