import { colors } from './../config/colors';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[select]',
})
export class SelectDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.padding = '1px 3px';
    this.elementRef.nativeElement.style.borderRadius = '5px';
    this.elementRef.nativeElement.style.backgroundColor = colors.accent;
    this.elementRef.nativeElement.style.color = '#fff';
  }
}
