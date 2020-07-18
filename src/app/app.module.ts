import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplComponent } from './empl/empl.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EmplsListComponent } from './empls-list/empls-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplComponent,
    NoFoundComponent,
    NavComponent,
    FooterComponent,
    EmplsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
