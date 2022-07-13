import { NgModule } from "@angular/core";
import { horascom } from "./com/hora.component";

@NgModule({
    declarations: [
        horascom
    ],
    exports: [
        horascom
    ]
})
export class HorasModule{}