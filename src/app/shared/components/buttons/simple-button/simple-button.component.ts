import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  color: 'btn-primary' | 'btn-secondary' | 'btn-succes' | 'btn-danger' = 'btn-primary'

  @Input()
  fullWidth: boolean = false
  
  @Input()
  disabled: boolean = false

  @Output()
  brubsClick: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onBrubsClick(event: any) {
    this.brubsClick.emit(null)
  }

}
