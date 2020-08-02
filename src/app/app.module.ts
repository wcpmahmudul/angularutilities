import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HtmltopdfComponent } from './utilities/htmltopdf/htmltopdf.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Htmltopdf2Component } from './utilities/htmltopdf2/htmltopdf2.component';
import { SweetalertComponent } from './utilities/sweetalert/sweetalert.component';
import { ToastrComponent } from './utilities/toastr/toastr.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmltopdfComponent,
    HomeComponent,
    Htmltopdf2Component,
    SweetalertComponent,
    ToastrComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
