import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { CustomerNewComponent } from './components/customer/customer-new.component';

@NgModule({
  declarations: [
    HomeComponent,
    TableComponent,
    CustomerNewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeatureModule { }
