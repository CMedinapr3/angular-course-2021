import { Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  @Input() name: string = 'nomrbe 1';
  @Input() lastname: string = 'nomrbe 1';
  @Output() onSendData = new EventEmitter(null);

  constructor() { }


  onClickTest(event:any){
    console.log('EVENT CLICK', event);

    this.onSendData.emit('general data ricardo pari ' + this.name + this.lastname)
  }

}