import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FinishComponent } from './components/finish/finish.component';
import { PlacesComponent } from './components/places/places.component';
import { BillComponent } from './components/bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    FinishComponent,
    PlacesComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
