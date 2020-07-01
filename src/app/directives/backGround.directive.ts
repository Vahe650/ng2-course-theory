import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackGround]'
})
export class BackGroundDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBackGround') hoverColor: string = 'green';

  @HostBinding('style.background') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    // this.renderer.addClass(this.element.nativeElement, 'white-text');

    this.background = this.hoverColor;

  }

  @HostListener('mouseleave')
  mouseLeave() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
    // this.renderer.removeClass(this.element.nativeElement, 'white-text');
    this.background = this.defaultColor;

  }
}
