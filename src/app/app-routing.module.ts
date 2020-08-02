import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HtmltopdfComponent } from './utilities/htmltopdf/htmltopdf.component';
import { HomeComponent } from './home/home.component';
import { Htmltopdf2Component } from './utilities/htmltopdf2/htmltopdf2.component';
import { SweetalertComponent } from './utilities/sweetalert/sweetalert.component';
import { ToastrComponent } from './utilities/toastr/toastr.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'htmltopdf', component: HtmltopdfComponent },
  { path: 'htmltopdf2', component: Htmltopdf2Component },
  { path: 'sweetalert', component: SweetalertComponent },
  { path: 'toastr', component: ToastrComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
