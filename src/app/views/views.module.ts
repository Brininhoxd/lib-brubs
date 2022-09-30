import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonsModule } from './buttons/buttons.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    NotFoundModule,
    ButtonsModule,
    SharedModule
  ]
})
export class ViewsModule { }
