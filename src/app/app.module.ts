import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//imports de primeng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { MenubarModule } from 'primeng/menubar';

import { SplitButtonModule } from 'primeng/splitbutton';

//GALERIA
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { BotonesComponent } from './botones/botones.component';
import { GaleryComponent } from './galery/galery.component';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MensajeriaComponent } from './mensajeria/mensajeria.component';
import { ToastModule } from 'primeng/toast';




@NgModule({
  declarations: [		
    AppComponent,
    BotonesComponent,
      GaleryComponent,
      MensajeriaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SplitButtonModule,
    MenubarModule,
    ImageModule,
    GalleriaModule,
    MessagesModule, 
    ToastModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
