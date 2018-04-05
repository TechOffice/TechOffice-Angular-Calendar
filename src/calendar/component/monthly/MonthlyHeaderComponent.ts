import { MonthlyCalendar } from './../../model/MonthlyCalendar';
import { CalendarService } from './../../service/CalendarService';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
    selector: "monthly-header",
    template: `
        <div>
            <b>Month</b>: {{monthlyCalendar.getSelectedDate() | month}} 
            <button (click)="previousMonth()">&lt;</button>
            <button (click)="nextMonth()">&gt;</button>
        </div>
    `
})
export default class MonthlyHeaderComponent {

    @Input()
    monthlyCalendar: MonthlyCalendar;

    constructor(private calendarService: CalendarService){
        
    }

    previousMonth(){
        var date: Date = this.calendarService.getPreviousMonth(this.monthlyCalendar.getSelectedDate());
        var calendarWeeks = this.calendarService.getCalendarWeekArr(date);
        this.monthlyCalendar.setSelectedDate(date);
        this.monthlyCalendar.setCalendarWeeks(calendarWeeks);
    }

    nextMonth(){
        var date: Date = this.calendarService.getNextMonth(this.monthlyCalendar.getSelectedDate());
        var calendarWeeks = this.calendarService.getCalendarWeekArr(date);
        this.monthlyCalendar.setSelectedDate(date);
        this.monthlyCalendar.setCalendarWeeks(calendarWeeks);
    }
}