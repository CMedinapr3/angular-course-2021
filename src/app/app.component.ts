import { Component, Input } from '@angular/core';
import {of} from 'rxjs';
import { filter, map } from 'rxjs/operators';

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

  name="name";
  lastname="apellido";
  
  lista:string[]=[this.name, this.lastname];

  tictock = of([1,2,3,4,5]);

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
    this.tictock.pipe(
      map(s => s.join('-')),
      map(s => s + 'hola'),
    ).subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });
    // PERSON B
    this.tictock.pipe(
      filter((v:any) => v[0]%2 === 1)
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

    }
}
