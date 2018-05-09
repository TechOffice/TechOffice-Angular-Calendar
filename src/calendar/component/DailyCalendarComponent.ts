import { CalendarService } from './../service/CalendarService';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'daily-calendar',
    template: `
        <div>
            Daily Calendar
        </div>
    `
})
export default class DailyCalendarComponent implements OnInit{

    constructor(private calendarService: CalendarService){
    }

    ngOnInit(): void {
        var selectedDate =  new Date();
        var calendarWeeks = this.calendarService.getCalendarWeekArr(selectedDate);
    }
}