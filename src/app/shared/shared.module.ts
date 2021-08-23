import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ExponentPipe } from './exponent.pipe';
import { Provider1Component } from '../provider/provider1/provider1.component';
import { Shared3Pipe } from './shared3.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
   Shared3Pipe
    
  ],
  exports:[
    
  
  ]
})
export class SharedModule { }