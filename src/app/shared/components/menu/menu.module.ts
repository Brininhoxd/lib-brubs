import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SingleMenuComponent } from './menu-list/single-menu/single-menu.component';



@NgModule({
  declarations: [
    MenuListComponent,
    SingleMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuListComponent,
    SingleMenuComponent
  ]
})
export class MenuModule { }
