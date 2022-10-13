import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';

const addRouter:Routes = [
  {
    path:"",component:ViewQuotesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewQuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(addRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
