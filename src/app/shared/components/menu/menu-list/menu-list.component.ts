import { ChangeDetectionStrategy, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { SingleMenuComponent } from './single-menu/single-menu.component';

@Component({
  selector: 'brubs-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent implements OnInit {

  @ContentChildren(SingleMenuComponent)
  menuList!: QueryList<SingleMenuComponent>

  constructor() { }

  ngOnInit(): void {
  }

}
