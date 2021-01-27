import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerNewComponent } from './features/components/customer/customer-new.component';
import { CustomerAdminComponent } from './features/components/customer/customer-admin.component';
import { CustomerEditComponent } from './features/components/customer/customer-edit.component';
import { TypographyComponent } from './features/components/typography/typography.component';
import { UtilitiesComponent } from './features/components/utilities/utilities.component';
import { ColorsComponent } from './features/components/colors/colors.component';
import { DashboardComponent } from './features/components/dashboard.component';

import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      { path: 'customers', component: CustomerAdminComponent, data: { breadcrumb: 'Clientes' }},
      { path: 'customer-new', component: CustomerNewComponent, data: { breadcrumb: 'Nuevo Cliente' }},
      { path: 'customer-edit/:id', component: CustomerEditComponent, data: { breadcrumb: 'Actualizar Cliente' }},
      { path: 'typography', component: TypographyComponent, data: { breadcrumb: 'Tipografía' }},
      { path: 'utilities', component: UtilitiesComponent, data: { breadcrumb: 'Utilidades' }},
      { path: 'colors', component: ColorsComponent, data: { breadcrumb: 'Colores' }},
      { path: '**', redirectTo: 'customers' }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }