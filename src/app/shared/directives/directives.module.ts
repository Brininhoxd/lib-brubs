import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickableDirective } from './clickable.directive';



@NgModule({
  declarations: [
    ClickableDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ClickableDirective
  ]
})
export class DirectivesModule { }
