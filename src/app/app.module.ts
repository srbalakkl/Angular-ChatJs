import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { LineChartsComponent } from './line-charts/line-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartsComponent,
    LineChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
