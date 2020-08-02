import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HtmltopdfComponent } from './utilities/htmltopdf/htmltopdf.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Htmltopdf2Component } from './utilities/htmltopdf2/htmltopdf2.component';
import { SweetalertComponent } from './utilities/sweetalert/sweetalert.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmltopdfComponent,
    HomeComponent,
    Htmltopdf2Component,
    SweetalertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
