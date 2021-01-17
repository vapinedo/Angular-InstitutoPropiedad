import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CustomerNewComponent } from './components/customer/customer-new.component';
import { CustomerAdminComponent } from './components/customer/customer-admin.component';
import { CustomerEditComponent } from './components/customer/customer-edit.component';
import { TypographyComponent } from './components/typography/typography.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';

@NgModule({
  declarations: [
    CustomerNewComponent,
    CustomerAdminComponent,
    CustomerEditComponent,
    TypographyComponent,
    UtilitiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeatureModule { }
