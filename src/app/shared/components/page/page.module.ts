import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
