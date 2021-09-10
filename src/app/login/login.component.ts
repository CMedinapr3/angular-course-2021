import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formReactive: FormGroup;

  constructor(private formBuilder:FormBuilder) {

    this.formReactive = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {


  }

  getValue(value:string){
    return this.formReactive.get(value);
  }
}