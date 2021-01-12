import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './modules/material.module';

import { SidebarMenuComponent } from './components/sidebar-menu.component';

@NgModule({
  declarations: [
    SidebarMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SidebarMenuComponent,
    
    MaterialModule
  ]
})
export class SharedModule { }
