import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerNewComponent } from './features/components/customer/customer-new.component';
import { CustomerAdminComponent } from './features/components/customer/customer-admin.component';
import { CustomerEditComponent } from './features/components/customer/customer-edit.component';
import { TypographyComponent } from './features/components/typography/typography.component';
import { UtilitiesComponent } from './features/components/utilities/utilities.component';
import { ColorsComponent } from './features/components/colors/colors.component';

const routes: Routes = [
  { path: 'customers', component: CustomerAdminComponent },
  { path: 'customer-new', component: CustomerNewComponent },
  { path: 'customer-edit/:id', component: CustomerEditComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'utilities', component: UtilitiesComponent },
  { path: 'colors', component: ColorsComponent },
  { path: '**', redirectTo: 'customer-new' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }