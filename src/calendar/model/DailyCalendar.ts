import { CalendarInterval } from './CalendarInterval';


export class DailyCalendar{

    private selectedDate: Date;
    private calendarIntervals: CalendarInterval[];

    constructor(selectedDate: Date, calendarIntervals: CalendarInterval[]){
        this.selectedDate = selectedDate;
        this.calendarIntervals = calendarIntervals;
    }

    public getSelectedDate(): Date{
        return this.selectedDate;
    }

    public getCalendarIntervals(): CalendarInterval[]{
        return this.calendarIntervals;
    }
}