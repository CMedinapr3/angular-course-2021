import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WalletComponent } from './wallet/wallet.component';
import { TransComponent } from './trans/trans.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports:[ BrowserModule, 
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    
  
  ],
  declarations: [ AppComponent, WalletComponent, TransComponent, FormComponent ],
  entryComponents: [FormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
