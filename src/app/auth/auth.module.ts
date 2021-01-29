import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const components = [
  LoginComponent,
  NavbarComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [CommonModule, SharedModule]
})
export class AuthModule { }
