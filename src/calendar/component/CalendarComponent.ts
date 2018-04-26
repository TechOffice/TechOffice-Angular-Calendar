import { CalendarService } from './../service/CalendarService';
import { CalendarWeek } from './../model/CalendarWeek';
import { CalendarDate } from './../model/CalendarDate';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: "calendar",
    template: `
        <div>
            <input/>
            <monthly-calendar></monthly-calendar>
        </div>
    `
})
export default class CalendarComponent implements OnInit{

    mode: string;
    calendarWeeks: CalendarWeek[];

    constructor(private calendarService: CalendarService){
    }

    ngOnInit(): void {
        this.calendarWeeks = this.calendarService.getCalendarWeekArr(new Date());
    }
}