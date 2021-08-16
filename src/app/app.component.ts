import { Component, Input } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';
  sw = true;

  color:string;
  personASub:Subscription;
  video = 1;
  tictock = new BehaviorSubject(this.video);

  name="name";
  lastname="apellido";
  
  lista:string[]=[this.name, this.lastname];


//{1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'} convertir a un array y sumar los numeros pares
  constructor(){
    const a = {1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'};
   const b = Object.keys(a).map(n => parseInt(n)).reduce((aux,value ) => {
     if(value%2 ===0){
       aux = aux + value;
     }
     return aux
   },0);
   console.log('resultado', b);
  
   
  //[1,2,3,4,5,6] filtrar los numeros impares y mostrarlos como cadena
   const tareaFilter = [1,2,3,4,5,6].filter(item => item%2 !== 0).join(',');
   console.log(tareaFilter);

  
     // PERSON A
     this.personASub = this.tictock.pipe(
      filter(s => s%2 === 0)
    ).subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });
    // PERSON B
    this.tictock.pipe(
      
      delay(4000)
    ).subscribe(v => {
      console.log('PERSON B VIDEO', v);
    });
    // PERSON C
    this.tictock.subscribe(v => {
      console.log('PERSON C VIDEO', v);
    });
  
  
  }
  printDataTest1Comp(event:any){
    console.log('RICARDO COMP:', event);
    }

    printData(event){
      console.log('Child Test 2:', event);
    }
  
    onAddVideo(){
      this.video ++
      this.tictock.next(this.video);    
    }
  
    person1Unsubscribe(){
       this.personASub.unsubscribe();
       console.log('PERSON A SE DESUSCRIBE')
    }

    test(event){
      console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA', event);
    }
}
