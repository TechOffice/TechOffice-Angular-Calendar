import { CalendarService } from './../service/CalendarService';
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: 'year'})
export class YearPipe implements PipeTransform {
 
    constructor(private calendarService: CalendarService){

    }

    transform(value: Date) {
        return this.calendarService.getYear(value);
    }

}