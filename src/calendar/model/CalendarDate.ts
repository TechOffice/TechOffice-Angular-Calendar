import { CalendarInterval } from './CalendarInterval';
import { Input } from '@angular/core';
import * as moment from 'moment';

export class CalendarDate {

    private date: Date;
    private calendarIntervals: CalendarInterval[];
    private sameMonthInd: boolean;

    constructor(date: Date, sameMonthInd: boolean = true, calendarIntervals?: CalendarInterval[]){
        this.date= date;
        this.sameMonthInd = sameMonthInd;
        this.calendarIntervals = calendarIntervals;
    }

    public getDate() : Date{
        return this.date;
    }

    public getDayInMonth() : number{
        return moment(this.date).date();
    }

    public isSameMonth(): boolean {
        return this.sameMonthInd;
    }

    public getCalendarIntervals(): CalendarInterval[]{
        return this.calendarIntervals;
    }

    public toString(): string{
        return this.date.toString();
    }

}