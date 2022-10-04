import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from './buttons/buttons.module';
import { PageModule } from './page/page.module';
import { MenuModule } from './menu/menu.module';
import { AccordionModule } from './accordion/accordion.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageModule,
    ButtonsModule,
    MenuModule,
    AccordionModule,
  ],
  exports: [
    PageModule,
    ButtonsModule,
    AccordionModule
  ]
})
export class ComponentsModule { }
