import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { GaleryComponent } from './galery/galery.component';
import { MensajeriaComponent } from './mensajeria/mensajeria.component';

const routes: Routes = [
  {
    path: '',
    component: BotonesComponent
  },
  {
    path: 'botones',
    component: BotonesComponent
  },
  {
    path: 'galeria',
    component: GaleryComponent
  },
  {
    path: 'mensajeria',
    component: MensajeriaComponent
  },
  {
    path: '**',
    redirectTo: "botones"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
