import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CustomerNewComponent } from './components/customer/customer-new.component';
import { CustomerAdminComponent } from './components/customer/customer-admin.component';
import { CustomerEditComponent } from './components/customer/customer-edit.component';

@NgModule({
  declarations: [
    CustomerNewComponent,
    CustomerAdminComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeatureModule { }
