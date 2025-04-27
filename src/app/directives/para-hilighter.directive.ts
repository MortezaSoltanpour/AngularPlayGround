import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[paraHilighter]',
})
export class ParaHilighterDirective implements OnInit {
  @Input('paraHilighter') color?: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const colorToApply =
      this.color && this.color.trim() !== '' ? this.color : 'red';
    this.renderer.setStyle(this.el.nativeElement, 'color', colorToApply);
  }
}
