import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProgressbarComponent } from './components/loaders/progressbar.component';
import { SpinnerComponent } from './components/loaders/spinner.component';

@NgModule({
  declarations: [
    SidebarComponent,
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
    SidebarComponent,
    ProgressbarComponent,
    SpinnerComponent,
    
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }