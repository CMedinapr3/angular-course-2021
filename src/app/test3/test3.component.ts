import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements  OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked{

  @Input() name;

  constructor() { 
    console.log('CONSTRUCTOR');
  }

 ngOnInit(){
  console.log('onIinit');

 }
 ngOnChanges(changes:any){
  console.log('ngOnChanges', changes);

 }
  ngDoCheck(){
    console.log('ngDocheck');

  }

  ngOnDestroy(){
    console.log('ngOnDestroy');

  }


  ngAfterViewInit(){
    console.log('VIEW INIT');
  }

  ngAfterContentInit(){
    console.log('CONTENT INIT');
  }

  ngAfterContentChecked(){
    console.log('CONTENT CHECK');
  }

  ngAfterViewChecked(){
    console.log('VIEW CHECK');
  }

}