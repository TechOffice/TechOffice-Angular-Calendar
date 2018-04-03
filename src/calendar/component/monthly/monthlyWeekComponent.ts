import { CalendarWeek } from './../../model/CalendarWeek';
import { CalendarDate } from './../../model/CalendarDate';
import { Component, Input } from "@angular/core";

@Component({
    selector: "monthly-week",
    template: `
        <div>
            <ng-container *ngFor="let calendarDate of calendarWeek.getCalendarDates()">
                <monthly-day [calendarDate]="calendarDate"></monthly-day>
            </ng-container>
        </div>
    `
})
export default class MonthlyWeekComponent{
    
    @Input()
    calendarWeek: CalendarWeek;


}
