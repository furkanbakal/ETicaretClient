import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';

//Bir modül başka bir modulü kendi içerisinde kullanıcaksa o modülü import etmesi gerekir.


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule
  ],
  exports: [
    LayoutModule
  ]
})
export class AdminModule { }
