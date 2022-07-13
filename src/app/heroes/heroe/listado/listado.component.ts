import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','hulk','thor','luz'];
  heroku:string='';
  borrar(){
   this.heroku = this.heroes.shift() || '';
   
  }
}
