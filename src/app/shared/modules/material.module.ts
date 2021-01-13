import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }