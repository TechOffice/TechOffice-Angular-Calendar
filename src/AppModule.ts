import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import CalendarComponent from './calendar/component/CalendarComponent';
import { CalendarService } from './calendar/service/CalendarService';


@NgModule({
    declarations: [
      AppComponent,
      CalendarComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [
      CalendarService
    ],
    bootstrap: [AppComponent]
  })
export default class AppModule {
    

}


