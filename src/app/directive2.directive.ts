import { Directive, EventEmitter, Input, OnChanges, Output, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[ngIfTask]'
})
export class Directive2Directive implements OnChanges{


  @Input() ngIfTask: boolean = true;
  @Output() test = new EventEmitter<any>();

  ngOnChanges(changes: any) {
    console.log(changes);
    this.setView(changes.ngIfTask.currentValue);
    this.test.emit('output structural');
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { 

  }


  setView(show: boolean) {
    if (show) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}