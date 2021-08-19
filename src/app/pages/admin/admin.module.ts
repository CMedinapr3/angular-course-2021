import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin1Component } from './admin1/admin1.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [

    Admin1Component
    
    ],
  exports:[
    Admin1Component
  ]
})
export class AdminModule { }