import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CustomerService } from './services/customer.service';
import { DialogService } from './services/dialog.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    CustomerService,
    DialogService
  ]
})
export class CoreModule { }
