import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimaisComponent} from "./components/animais/animais.component";
import {EspeciesComponent} from "./components/especies/especies.component";

const routes: Routes = [
  { path: 'animais', component: AnimaisComponent},
  { path: 'especies', component: EspeciesComponent},
  { path: '', redirectTo: '/animais', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
