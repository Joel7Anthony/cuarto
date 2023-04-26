import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    NosotrosComponent,
    HomeComponent,
    ContactanosComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NosotrosComponent,
    HomeComponent,
    ContactanosComponent,
    ProductosComponent
  ]
})
export class WebModule { }
