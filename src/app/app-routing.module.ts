import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/components/home/home.component';
import { CustomerNewComponent } from './features/components/customer/customer-new.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customer-new', component: CustomerNewComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }