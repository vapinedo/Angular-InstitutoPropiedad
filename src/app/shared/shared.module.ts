import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ProgressbarComponent } from './components/loaders/progressbar.component';
import { SpinnerComponent } from './components/loaders/spinner.component';

@NgModule({
  declarations: [
    SidebarMenuComponent,
    ProgressbarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarMenuComponent,
    ProgressbarComponent,
    SpinnerComponent,
    
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }