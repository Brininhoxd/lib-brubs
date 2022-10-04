import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface DataSoruceRadio {
  text: string
}
//  TODO
@Component({
  selector: 'brubs-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent implements OnInit {

  @Input()
  radioItems: DataSoruceRadio[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
