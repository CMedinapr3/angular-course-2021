import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trans',
  template:`
  <div [style.background]="mineType === 'PoW'? 'yellow' : 'green'"
  style="float: left; margin: 10px; padding: 10px;">

<p>Date: {{date | date: "Y/M/d"}}</p>
<p>From: {{from}}</p>
<p>To: {{to}}</p>
<p>Quantity: {{quantity}}</p>
<p>MoneyType: {{moneyType | titlecase}}</p>
<p>MineType: {{mineType}}</p>
<p>Miner: {{miner}}</p>

<ng-content></ng-content>


</div>

`,
})
export class TransComponent implements OnInit {
  @Input() id;
  @Input() date;
  @Input() from;
  @Input() to;
  @Input() quantity;
  @Input() moneyType;
  @Input() mineType;
  @Input() miner;

  constructor() { }

  ngOnInit() {
  }

}