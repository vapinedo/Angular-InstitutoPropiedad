import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerNewComponent } from './features/components/customer/customer-new.component';

const routes: Routes = [
  { path: 'customer-new', component: CustomerNewComponent },
  { path: '**', redirectTo: 'customer-new' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }