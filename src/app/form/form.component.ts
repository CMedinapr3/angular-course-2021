import { Component, Input, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import { MetodosService } from '../metodos.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() mode = 'Create';
  constructor(private metodos: MetodosService,
    public dialogRef: MatDialogRef<FormComponent>, ) { }

  ngOnInit() {
  }

  onRegister(form:any){


    this.metodos.createTrans({
      ...form.value,
      date: new Date(),
      from: 0,
      to: 0,
      quatity: 0,
      moneyType: 0,
      mineType: 0,
      miner: 0
    }).subscribe( )
  
    this.dialogRef.close(FormComponent)

  }
  onSubmitTemplate(values:any){
    console.log('VALUES: ', values)
  }
}