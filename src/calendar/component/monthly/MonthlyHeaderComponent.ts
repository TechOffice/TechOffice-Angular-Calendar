import { CalendarService } from './../../service/CalendarService';
import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
    selector: "monthly-header",
    template: `
        <div>
            <b>Month</b>: {{selectedDate | month}} 
            <button (click)="previousMonth()">&lt;</button>
            <button (click)="nextMonth()">&gt;</button>
        </div>
    `
})
export default class MonthlyHeaderComponent {

    @Input()
    selectedDate: Date;

    constructor(private calendarService: CalendarService){
        
    }

    previousMonth(){
        this.selectedDate = this.calendarService.getPreviousMonth(this.selectedDate);
    }

    nextMonth(){
        this.selectedDate = this.calendarService.getNextMonth(this.selectedDate);
    }
}