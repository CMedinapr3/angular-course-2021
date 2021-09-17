import { Component, VERSION } from '@angular/core';
import { FormComponent } from './form/form.component';
import { MetodosService } from './metodos.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  wallets=[]
  transactions=[]
  btc = 0
  eth = 0
  anyLeft = true;

  constructor(private metodos:MetodosService) { 
      this.metodos.getAllWallets().subscribe(data => this.getDataWallets(data))
    this.metodos.getAllTrans().subscribe(data => this.getDataTrans(data))
  }
  getDataWallets(data){
    this.wallets=Object.entries(data);
    this.updateTotalMoney()
  }
    getDataTrans(data){
    this.transactions=Object.entries(data);
    this.transLeft()
  }
  printThis(){
    console.log(this.wallets)
  }
  onMine(idTrans, from, to, quantity, moneyType){
    var personFrom = this.wallets.filter(item => item[1]["wallet"] == from)
    var personTo = this.wallets.filter(item => item[1]["wallet"] == to)
    var newQuantPerFrom = personFrom[0][1][moneyType] - quantity
    var newQuantPerTo = personTo[0][1][moneyType] + quantity
    console.log(newQuantPerFrom)
    console.log(newQuantPerTo)
            if(moneyType === "btc"){
               this.metodos.mineBTC(personFrom[0][0],newQuantPerFrom).subscribe(res => console.log(res))
                this.metodos.mineBTC(personTo[0][0],newQuantPerTo).subscribe(res => console.log(res))
             }else{
                  this.metodos.mineETH(personFrom[0][0],newQuantPerFrom).subscribe(res => console.log(res))
                  this.metodos.mineETH(personTo[0][0],newQuantPerTo).subscribe(res => console.log(res))
    }

    this.metodos.delete(idTrans).subscribe(res=>console.log(res))
    this.metodos.getAllWallets().subscribe(data => this.getDataWallets(data))
    this.metodos.getAllTrans().subscribe(data => this.getDataTrans(data))


    window.location.reload();
    
  }

  editTrans(tran){
    console.log("edited")
  }

  createTrans(){
    this.matDialog.open(FormComponent);
  }

  updateTotalMoney(){
    console.log(this.wallets)
    this.eth = 0
    this.btc = 0
    for(var i in this.wallets){
      this.eth = this.wallets[i][1]["eth"] + this.eth
      this.btc = this.wallets[i][1]["btc"] + this.btc
      console.log(this.btc)
    }
  }

  transLeft():boolean{
    return this.transactions.find(item => item[1]['mineType'] !== 'PoS' ||
    item[1]['miner'] > 20) === undefined
  }
}
