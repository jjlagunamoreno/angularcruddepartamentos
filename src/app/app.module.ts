import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //AGREGAMOS FUNCIONALIDAD PARA FORMULARIOS
import { provideHttpClient } from '@angular/common/http'; //AGREGAMOS FUNCIONALIDAD PARA SERVICIOS http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenucomponentComponent } from './components/menucomponent/menucomponent.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { ServiceDepartamentos } from './services/service.departamentos'; //AGREGAMOS FUNCIONALIDAD PARA SERVICIO DEPARTAMENTOS
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    MenucomponentComponent,
    HomecomponentComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //AGREGAMOS FUNCIONALIDAD PARA FORMULARIOS
  ],
  providers: [provideHttpClient(), ServiceDepartamentos], //AGREGAMOS FUNCIONALIDAD PARA SERVICIOS http Y PARA SERVICIO DEPARTAMENTOS
  bootstrap: [AppComponent]
})
export class AppModule { }
