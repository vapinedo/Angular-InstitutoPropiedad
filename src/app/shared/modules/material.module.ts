import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatIconModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }