import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CustomerNewComponent } from './components/customer/customer-new.component';
import { CustomerAdminComponent } from './components/customer/customer-admin.component';

@NgModule({
  declarations: [
    CustomerNewComponent,
    CustomerAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeatureModule { }
