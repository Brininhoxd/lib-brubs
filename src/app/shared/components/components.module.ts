import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageModule } from './page/page.module';
import { ButtonsModule } from './buttons/buttons.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageModule,
    ButtonsModule,
  ],
  exports: [
    PageModule,
    ButtonsModule
  ]
})
export class ComponentsModule { }
