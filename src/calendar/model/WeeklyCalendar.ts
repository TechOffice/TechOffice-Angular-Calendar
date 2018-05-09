import { CalendarDate } from './CalendarDate';

export class WeeklyCalendar{
    
    private selectedDate: Date;
    private calendarDates: CalendarDate[];

    constructor(selectedDate: Date, calendarDates: CalendarDate[]){
        this.selectedDate = selectedDate;
        this.calendarDates = calendarDates;
    }

    public getSelectedDate(): Date{
        return this.selectedDate;
    }

    public getCalendarIntervals(): CalendarDate[]{
        return this.calendarDates;
    }

}