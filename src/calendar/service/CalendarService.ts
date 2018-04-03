import { CalendarDate } from './../model/CalendarDate';
import { CalendarWeek } from './../model/CalendarWeek';
import { Injectable } from "@angular/core";
import * as moment from "moment";

/**
 * Calendar Service
 * 
 * @author Ben Cheng
 */
@Injectable()
export class CalendarService{

    /**
     * Get Calendar Week Array
     * 
     * @param date
     * @return Calendar Week Array 
     */
    public getCalendarWeekArr(date: Date): CalendarWeek[]{
        let calendarWeeks: CalendarWeek[] = [];
        let calendarWeek: CalendarWeek = null;
        let dateArr: Date[]  = this. getDateArrInMonth(date);
        for (var i=0; i<dateArr.length; i++){
            var date = dateArr[i];
            if (calendarWeek == null){
                calendarWeek = new CalendarWeek();
            }else if (this.getDayOfWeek(date) == 1 ){
                calendarWeeks.push(calendarWeek);
                calendarWeek = new CalendarWeek();
            }
            calendarWeek.push(new CalendarDate(date));
        }
        calendarWeeks.push(calendarWeek);
        return calendarWeeks;
    }

    /**
     * Get Date Arry in Month with specified date
     * @param date 
     * @return Date Array 
     */
    public getDateArrInMonth(date: Date): Date[] {
        let dates: Date[] = [];
        var dateMoment = moment(date).startOf('month');
        let numDayInMonth = this.getNumDayInMonth(date);
        for (var i=0; i< numDayInMonth; i++){
            dates.push(dateMoment.toDate());
            dateMoment.add(1, 'days');
        }
        
        return dates;
    }

    /**
     * Get Number of Day in Month with the specified date
     * 
     * @param date 
     * @return Number of Day in Month
     */
    public getNumDayInMonth(date: Date): number{
        var dateMoment = moment(date);
        var startMoment = dateMoment.startOf('month');
        var endMoment = dateMoment.endOf('month');
        return moment.duration(endMoment.diff(startMoment)).days();
    }

    /**
     * Get Number of Week in Month with the specified date
     * @param date 
     * @return Number of Week in Month
     */
    public getNumWeekInMonth(date: Date): number{
        var dateMoment = moment(date);
        var startMoment = dateMoment.startOf('month');
        var endMoment = dateMoment.endOf('month');
        return moment.duration(endMoment.diff(startMoment)).weeks();
    }

    /**
     * Get Day of Week with the specified date
     * 
     * @param date 
     * @return day of week
     */
    public getDayOfWeek(date: Date): number{
        var dateMoment = moment(date);
        return dateMoment.days();
    }

    /**
     * Get Next Date
     * 
     * @param date 
     * @return next date
     */
    public getNextDate(date: Date): Date {
        var dateMoment = moment(date);
        dateMoment.add(1, 'days');
        return dateMoment.toDate();
    }
}