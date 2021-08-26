
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import { Home1Component } from '../pages/home/home1/home1.component';
import { Home2Component } from '../pages/home/home2/home2.component';


const routes: Routes = [
  {path: '', redirectTo: 'home1', pathMatch: 'full'},
  {path: 'home1', component: Home1Component,
  }
]

@NgModule({
  declarations: [
    Home1Component,
    Home2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class HomeCompModule { }