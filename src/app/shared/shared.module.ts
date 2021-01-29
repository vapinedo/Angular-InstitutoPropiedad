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
import { FacebookLoaderComponent } from './components/loaders/facebook-loader.component';
import { NotificationsMenuComponent } from './components/notifications-menu/notifications-menu.component';

const components = [
  HeaderComponent,
  BreadcrumbsComponent,
  MainmenuComponent,
  SubmenuComponent,
  FooterComponent,
  SpinnerComponent,
  ProgressbarComponent,
  FacebookLoaderComponent,
  NotificationsMenuComponent,  
];

const modules = [
  CommonModule,
  RouterModule,
  BreadcrumbModule,
  MaterialModule,
  ReactiveFormsModule  
];

@NgModule({
  declarations: [components],
  imports: [modules],
  exports: [components, modules]
})
export class SharedModule { }