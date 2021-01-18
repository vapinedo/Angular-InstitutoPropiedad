import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './features/feature.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),    
        

    AppRoutingModule,
    SharedModule,
    CoreModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
