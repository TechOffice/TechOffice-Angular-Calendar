import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './AppComponent';
import CalendarComponent from './calendar/component/CalendarComponent';
import MonthlyWeekComponent from './calendar/component/monthly/MonthlyWeekComponent';
import MonthlyDayComponent from './calendar/component/monthly/MonthlyDayComponent';
import { CalendarService } from './calendar/service/CalendarService';
import MonthlyCalendarComponent from './calendar/component/MonthlyCalendarComponent';


@NgModule({
    declarations: [
      AppComponent,
      CalendarComponent,
      MonthlyCalendarComponent,
      MonthlyWeekComponent,
      MonthlyDayComponent
    ],
    providers: [
      CalendarService
    ],
    imports: [
      BrowserModule
    ],
    bootstrap: [AppComponent]
  })
export default class AppModule {
    

}


