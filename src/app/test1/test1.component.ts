import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  @Input('status') statusTest: string = 'working';
  @Output() onSendData = new EventEmitter(null);
  @Input('estilo') style: number = 0;
  constructor() {}


  onClickTest(event:any){
console.log('EVENT CLICK', event);


this.onSendData.emit({
  name: "test 1",
  status: "busy"
})

  }
}
