import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'brubs-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
