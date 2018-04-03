import { CalendarDate } from './../model/CalendarDate';
import { Component, Input } from '@angular/core';

@Component({
    selector: "calendar",
    template: `<div><monthly-day [calendarDate]="date"></monthly-day></div>`
})
export default class CalendarComponent{

    date: CalendarDate;

    constructor(){
        this.date = new CalendarDate(new Date());
    }
}