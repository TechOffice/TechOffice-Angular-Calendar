import { CalendarDate } from "./CalendarDate";

export class CalendarWeek{

    private calendarDates: CalendarDate[];

    constructor(calendarDates?: CalendarDate[]){
        if (calendarDates){
            this.calendarDates = calendarDates;
        }else {
            this.calendarDates = [];
        }
    }

    public getCalendarDates(): CalendarDate[]{
        return this.calendarDates;
    }

    public push(calendarDate: CalendarDate): void{
        this.calendarDates.push(calendarDate);
    }

    public size(): number{
        return this.calendarDates.length;
    }
}

