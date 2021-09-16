import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() mode = 'Create';
  constructor() { }

  ngOnInit() {
  }
  onSubmitTemplate(values:any){
    console.log('VALUES: ', values)
  }
}