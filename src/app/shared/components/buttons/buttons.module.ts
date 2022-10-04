import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';



@NgModule({
  declarations: [
    SimpleButtonComponent,
    RadioButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimpleButtonComponent,
    RadioButtonComponent
  ]
})
export class ButtonsModule { }
