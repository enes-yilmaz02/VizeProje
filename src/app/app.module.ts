import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
