import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { MainmenuComponent } from './components/sidebar/mainmenu.component';
import { SubmenuComponent } from './components/sidebar/submenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/loaders/spinner.component';
import { ProgressbarComponent } from './components/loaders/progressbar.component';
import { NotificationsMenuComponent } from './components/notifications-menu/notifications-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    MainmenuComponent,
    SubmenuComponent,
    FooterComponent,
    SpinnerComponent,
    ProgressbarComponent,
    NotificationsMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    MainmenuComponent,
    SubmenuComponent,
    FooterComponent,
    SpinnerComponent,
    ProgressbarComponent,
    NotificationsMenuComponent,
    
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }