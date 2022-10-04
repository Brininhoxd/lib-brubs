import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EnumIcons } from '../../helpers/types'

@Component({
  selector: 'brubs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  icon = EnumIcons

  constructor() { }

  ngOnInit(): void {
  }

}
