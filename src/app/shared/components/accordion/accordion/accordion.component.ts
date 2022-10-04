import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'brubs-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionItemComponent)
  accordionList!: QueryList<AccordionItemComponent>

  constructor() { }

  ngAfterContentInit(): void {


    this.accordionList.changes.subscribe((retorno) => {
      console.log("retorno accordio ", retorno);

    })
  }

}
