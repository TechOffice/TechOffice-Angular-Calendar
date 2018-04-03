import { Input } from '@angular/core';
import * as moment from 'moment';

export class CalendarDate {

    private date: Date;

    constructor(date?: Date){
        this.date= date;
    }

    public getDate() : Date{
        return this.date;
    }

    public getDayInMonth() : number{
        return moment(this.date).date();
    }

}