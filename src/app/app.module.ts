import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
