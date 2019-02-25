import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit {

  @Input() defaultColor : string = 'transparent'
  @Input() highlightColor : string = 'blue'

  constructor(private elRef : ElementRef, private rendered: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }
  @HostBinding('style.backgroundColor') backgroundColor: string

  @HostListener('mouseenter') mouseover(eventData : Event) {
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData : Event) {
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' )
    this.backgroundColor = this.defaultColor
  }

  
}
