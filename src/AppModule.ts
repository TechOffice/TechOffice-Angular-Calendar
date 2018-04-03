import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import CalendarComponent from './calendar/component/CalendarComponent';
import { CalendarService } from './calendar/service/CalendarService';
import MonthlyWeekComponent from './calendar/component/monthly/monthlyWeekComponent';
import MonthlyDayComponent from './calendar/component/monthly/monthlyDayComponent';


@NgModule({
    declarations: [
      AppComponent,
      CalendarComponent,
      MonthlyWeekComponent,
      MonthlyDayComponent
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


