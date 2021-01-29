import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CustomerService } from './services/customer.service';
import { DialogService } from './services/dialog.service';
import { DatetimeService } from './services/datetime.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    CustomerService,
    DialogService,
    DatetimeService,
    UserService,
    AuthService
  ]
})
export class CoreModule { }
