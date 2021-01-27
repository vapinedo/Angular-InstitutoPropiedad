import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

const components = [
  LoginComponent,
  RegisterComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [CommonModule]
})
export class AuthModule { }
