import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MainmenuComponent } from './components/sidebar/mainmenu.component';
import { SubmenuComponent } from './components/sidebar/submenu.component';
import { ProgressbarComponent } from './components/loaders/progressbar.component';
import { SpinnerComponent } from './components/loaders/spinner.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    MainmenuComponent,
    SubmenuComponent,
    ProgressbarComponent,
    SpinnerComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MainmenuComponent,
    SubmenuComponent,
    ProgressbarComponent,
    SpinnerComponent,
    BreadcrumbsComponent,
    
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }