import { CalendarService } from './../service/CalendarService';
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: 'month'})
export class MonthPipe implements PipeTransform {
 
    constructor(private calendarService: CalendarService){

    }

    transform(value: Date) {
        return this.calendarService.getMonth(value);
    }

}