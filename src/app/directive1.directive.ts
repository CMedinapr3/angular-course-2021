import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, OnChanges} from '@angular/core';

@Directive({
  selector: '[directive1Test]'
})
export class Directive1Directive {
  
  @Input() color: string = 'yellow';
  @Input() directive1Test: string = 'yellow';
  @Output() outputTest = new EventEmitter<any>(null);

  @HostListener('click') onClick() {
    this.setBackgroundColor(this.directive1Test);
  }

  @HostListener('mouseleave') onMouseleave() {
    this.setBackgroundColor('green');
    this.outputTest.emit('test myoutput');
  }

  @HostListener('mouseenter') onMouseenter() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  constructor(private element: ElementRef) {
    console.log('AAAAAAAAAAAAAAAAAAA', this.element)
    this.setBackgroundColor(this.directive1Test);
    this.element.nativeElement.style.border = '10px green solid';
  }

  setBackgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}