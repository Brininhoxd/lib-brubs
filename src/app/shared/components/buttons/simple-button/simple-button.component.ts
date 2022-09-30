import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brubs-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonComponent implements OnInit {

  @Input()
  text: string = '';

  @Input()
  tipo: 'btn-primary' | 'btn-secondary' | 'btn-succes' | 'btn-danger' = 'btn-primary'

  constructor() { }

  ngOnInit(): void {
  }

}
