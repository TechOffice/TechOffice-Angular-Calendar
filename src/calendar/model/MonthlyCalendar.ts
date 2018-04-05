import { CalendarWeek } from './CalendarWeek';

export class MonthlyCalendar {

    private selectedDate: Date;
    private calendarWeeks: CalendarWeek[];
    
    constructor(selectedDate: Date, calendarWeeks: CalendarWeek[]){
        this.selectedDate = selectedDate;
        this.calendarWeeks = calendarWeeks;
    }

    public getSelectedDate(): Date{
        return this.selectedDate;
    }

    public setSelectedDate(selectedDate: Date): void{
        this.selectedDate = selectedDate;
    }

    public getCalendarWeeks(): CalendarWeek[]{
        return this.calendarWeeks;
    }

    public setCalendarWeeks(calendarWeeks: CalendarWeek[]): void {
        this.calendarWeeks = calendarWeeks;
    }
}