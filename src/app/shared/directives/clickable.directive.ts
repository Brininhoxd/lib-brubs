import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[brubsClickable]'
})
export class ClickableDirective {

  constructor(
    private element: ElementRef
  ) { }

  @HostListener('mouseover')
  onMouseEnter() {
    this._hover('pointer')
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this._hover('')
  }

  private _hover(cursor: string) {
    this.element.nativeElement.style.cursor = cursor
  }


}
