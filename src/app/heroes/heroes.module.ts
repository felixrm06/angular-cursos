
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./heroe/listado/listado.component";

@NgModule({
    declarations: [
        ListadoComponent,
        HeroeComponent,
    ],
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    imports: [
        CommonModule
    ],
})
export class heroe{

}