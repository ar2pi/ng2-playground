import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdProgressSpinnerModule, MdIconModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { PlaneService } from './plane.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    MdProgressSpinnerModule,
    MdIconModule
  ],
  providers: [PlaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
