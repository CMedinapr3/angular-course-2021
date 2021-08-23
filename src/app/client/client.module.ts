import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderModule } from '../provider/provider.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProviderModule
  ],
  declarations: []
})
export class ClientModule { }