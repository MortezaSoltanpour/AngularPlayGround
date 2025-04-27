import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[paraHilighter]',
})
export class ParaHilighterDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'red';
  }
}
