import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UniqueIdService } from 'src/app/shared/services/unique-id.service';

@Component({
  selector: 'brubs-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent implements OnInit {

  @Input()
  title: string = ''

  id: string = '';

  constructor(
    private _generateIdService: UniqueIdService
  ) { }

  ngOnInit(): void {
    this.id = this._generateIdService.generateId('accordion');
  }

}
