import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/components/home/home.component';
import { FormsComponent } from './shared/components/forms/forms.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }