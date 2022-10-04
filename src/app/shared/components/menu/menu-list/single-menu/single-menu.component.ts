import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EnumIcons } from 'src/app/shared/helpers/types';

@Component({
  selector: 'brubs-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleMenuComponent implements OnInit {

  @Input()
  title: string = ''

  @Input()
  icon: EnumIcons = EnumIcons.DOT

  @Input()
  route: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
