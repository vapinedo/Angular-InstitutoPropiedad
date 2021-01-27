import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CustomerService } from './services/customer.service';
import { DialogService } from './services/dialog.service';
import { DatetimeService } from './services/datetime.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    CustomerService,
    DialogService,
    DatetimeService
  ]
})
export class CoreModule { }
