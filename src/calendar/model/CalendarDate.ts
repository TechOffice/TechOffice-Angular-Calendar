import { Input } from '@angular/core';
import * as moment from 'moment';

export class CalendarDate {

    private date: Date;
    private sameMonthInd: boolean;

    constructor(date: Date, sameMonthInd: boolean = true){
        this.date= date;
        this.sameMonthInd = sameMonthInd;
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

    public toString(): string{
        return this.date.toString();
    }

}