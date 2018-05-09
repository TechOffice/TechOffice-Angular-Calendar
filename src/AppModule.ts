import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import AppComponent from './AppComponent';
import CalendarComponent from './calendar/component/CalendarComponent';
import MonthlyWeekComponent from './calendar/component/monthly/MonthlyWeekComponent';
import MonthlyDayComponent from './calendar/component/monthly/MonthlyDayComponent';
import { CalendarService } from './calendar/service/CalendarService';
import MonthlyCalendarComponent from './calendar/component/MonthlyCalendarComponent';
import MonthlyHeaderComponent from './calendar/component/monthly/MonthlyHeaderComponent';
import { MonthPipe } from './calendar/pipe/MonthPipe';
import { YearPipe } from './calendar/pipe/YearPipe';
import DailyCalendarComponent from './calendar/component/DailyCalendarComponent';


@NgModule({
    declarations: [
      // Components
      AppComponent,
      CalendarComponent,
      MonthlyCalendarComponent,
      MonthlyHeaderComponent,
      MonthlyWeekComponent,
      MonthlyDayComponent,
      DailyCalendarComponent,

      // Pipes
      MonthPipe,
      YearPipe
    ],
    providers: [
      CalendarService
    ],
    imports: [
      FormsModule,
      ReactiveFormsModule,
      BrowserModule
    ],
    bootstrap: [AppComponent]
  })
export default class AppModule {
    

}


