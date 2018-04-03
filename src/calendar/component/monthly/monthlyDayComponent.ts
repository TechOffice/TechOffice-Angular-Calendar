import { CalendarDate } from './../../model/CalendarDate';
import { Component, Input } from "@angular/core";

@Component({
    selector: "monthly-day",
    template: "<span>{{calendarDate.getDayInMonth()}}<span>"
})
export default class MonthlyDayComponent{
    
    @Input()
    calendarDate: CalendarDate ;
    
    constructor(){
        
    }

}