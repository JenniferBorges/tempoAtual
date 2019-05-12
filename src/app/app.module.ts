import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { KmHPipe } from './pipe/kmH.pipe';
import { CelsiusPipe } from './pipe/temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    CelsiusPipe,
    KmHPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
