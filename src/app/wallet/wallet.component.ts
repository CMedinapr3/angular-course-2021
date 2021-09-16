import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wallet',
  template:` <div [style.background]=" (eth+btc) > 7 ? 'sienna' : (eth+btc) < 1 ? 'gray' : '	ivory'"
  style="float: left; margin: 10px; padding: 10px;">
  <p>Wallet: {{wallet}}</p>
  <p>Nombre: {{name | uppercase}}</p>
  <p>ETH: {{eth}}</p>
  <p>BTC: {{btc}}</p>
</div>`,
})
export class WalletComponent implements OnInit {
  @Input() id;
  @Input() wallet;
  @Input() name;
  @Input() eth;
  @Input() btc;
  constructor() { }

  ngOnInit() {
  }

}