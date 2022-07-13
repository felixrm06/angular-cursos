import { NgModule } from "@angular/core";
import { Contador } from "./com/contador.component";
@NgModule({
    declarations: [
        Contador
    ],
    exports: [
        Contador
    ]
})
export class ContaModule{}