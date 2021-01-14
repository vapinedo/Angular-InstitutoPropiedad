import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerNewComponent } from './features/components/customer/customer-new.component';
import { CustomerAdminComponent } from './features/components/customer/customer-admin.component';

const routes: Routes = [
  { path: 'customers', component: CustomerAdminComponent },
  { path: 'customer-new', component: CustomerNewComponent },
  { path: '**', redirectTo: 'customer-new' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }