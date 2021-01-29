import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { CustomerNewComponent } from './features/components/customer/customer-new.component';
import { CustomerAdminComponent } from './features/components/customer/customer-admin.component';
import { CustomerEditComponent } from './features/components/customer/customer-edit.component';
import { TypographyComponent } from './features/components/typography/typography.component';
import { UtilitiesComponent } from './features/components/utilities/utilities.component';
import { ColorsComponent } from './features/components/colors/colors.component';
import { DashboardComponent } from './features/components/dashboard.component';

import { LoginComponent } from './auth/components/login/login.component';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent,
    children: [
      { path: 'customers', component: CustomerAdminComponent, canActivate: [ AuthGuard ], data: { breadcrumb: 'Clientes' } },
      { path: 'customer-new', component: CustomerNewComponent, canActivate: [ AuthGuard ], data: { breadcrumb: 'Nuevo Cliente' }},
      { path: 'customer-edit/:id', component: CustomerEditComponent, canActivate: [ AuthGuard ], data: { breadcrumb: 'Actualizar Cliente' }},
      { path: 'typography', component: TypographyComponent, canActivate: [ AuthGuard ], data: { breadcrumb: 'Tipografía' }},
      { path: 'utilities', component: UtilitiesComponent, canActivate: [ AuthGuard ], data: { breadcrumb: 'Utilidades' }},
      { path: 'colors', component: ColorsComponent, canActivate: [ AuthGuard ], data: { breadcrumb: 'Colores' }},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }