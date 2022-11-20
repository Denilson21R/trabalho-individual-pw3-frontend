import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimaisComponent } from './components/animais/animais.component';
import { EspeciesComponent } from './components/especies/especies.component';
import { TabsComponent } from './components/tabs/tabs.component';
import {HttpClientModule} from "@angular/common/http";
import { ModalDetalharAnimalComponent } from './components/modal-detalhar-animal/modal-detalhar-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimaisComponent,
    EspeciesComponent,
    TabsComponent,
    ModalDetalharAnimalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
