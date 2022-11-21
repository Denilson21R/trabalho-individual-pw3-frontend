import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimaisComponent } from './components/animais/animais.component';
import { EspeciesComponent } from './components/especies/especies.component';
import { TabsComponent } from './components/tabs/tabs.component';
import {HttpClientModule} from "@angular/common/http";
import { ModalDetalharAnimalComponent } from './components/modal-detalhar-animal/modal-detalhar-animal.component';
import { ModalAdicionarAnimalComponent } from './components/modal-adicionar-animal/modal-adicionar-animal.component';
import { ModalAdicionarEspecieComponent } from './components/modal-adicionar-especie/modal-adicionar-especie.component';
import { ModalEditarAnimalComponent } from './components/modal-editar-animal/modal-editar-animal.component';
import { ModalEditarEspecieComponent } from './components/modal-editar-especie/modal-editar-especie.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimaisComponent,
    EspeciesComponent,
    TabsComponent,
    ModalDetalharAnimalComponent,
    ModalAdicionarAnimalComponent,
    ModalAdicionarEspecieComponent,
    ModalEditarAnimalComponent,
    ModalEditarEspecieComponent
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
