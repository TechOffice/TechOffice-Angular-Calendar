import { CalendarDate } from './../../model/CalendarDate';
import { Component, Input } from "@angular/core";

@Component({
    selector: "monthly-day",
    template: `
        <span style="display: inline-block; width: 30px;" 
            [style.color]="calendarDate.isSameMonth() == true? null: 'grey'"
            (click)="onClick()">
            {{calendarDate.getDayInMonth()}}
        <span>
    `
})
export default class MonthlyDayComponent{
    
    @Input()
    calendarDate: CalendarDate ;
    
    constructor(){
        
    }

    onClick(){
        alert("To be implemented. \n" + "Date: " + this.calendarDate.toString() );
    }
}