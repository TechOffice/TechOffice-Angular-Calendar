import { MonthlyCalendar } from './../model/MonthlyCalendar';
import { CalendarService } from './../service/CalendarService';
import { CalendarWeek } from './../model/CalendarWeek';
import { CalendarDate } from './../model/CalendarDate';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: "monthly-calendar",
    template: `
        <div>
            <monthly-header [monthlyCalendar]="monthlyCalendar"></monthly-header>
            <ng-container *ngFor="let calendarWeek of monthlyCalendar.getCalendarWeeks()">
                <monthly-week [calendarWeek]="calendarWeek"></monthly-week>
            </ng-container>
        </div>
    `
})
export default class MonthlyCalendarComponent implements OnInit{

    monthlyCalendar: MonthlyCalendar; 

    constructor(private calendarService: CalendarService){
    }

    ngOnInit(): void {
        var selectedDate =  new Date();
        var calendarWeeks = this.calendarService.getCalendarWeekArr(selectedDate);
        this.monthlyCalendar = new MonthlyCalendar(selectedDate, calendarWeeks);
    }
}