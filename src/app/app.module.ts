import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContaModule } from './contador/conta.module';
import { HorasModule } from './contador/horas.module';
import { heroe } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    heroe, 
    ContaModule,
    HorasModule
  ]
,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
