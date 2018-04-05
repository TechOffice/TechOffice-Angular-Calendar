import { CalendarDate } from './../model/CalendarDate';
import { CalendarWeek } from './../model/CalendarWeek';
import { Injectable } from "@angular/core";
import * as moment from "moment";


@Injectable()
export class CalendarService {

    constructor(){}

    /**
     * Get Calendar Week Array
     * 
     * @param date
     * @return Calendar Week Array 
     */
    getCalendarWeekArr(date: Date): CalendarWeek[]{
        let calendarWeeks: CalendarWeek[] = [];
        let calendarWeek: CalendarWeek = null;
        let dateArr: Date[]  = this.getDateArrInMonth(date);
        for (var i=0; i<dateArr.length; i++){
            var date = dateArr[i];
            if (calendarWeek == null){
                calendarWeek = new CalendarWeek();
            }else if (this.getDayOfWeek(date) == 0 ){
                calendarWeeks.push(calendarWeek);
                calendarWeek = new CalendarWeek();
            }
            calendarWeek.push(new CalendarDate(date));
        }
        if (calendarWeek != null){
            calendarWeeks.push(calendarWeek);
        }
        return calendarWeeks;
    }

    /**
     * Get Date Arry in Month with specified date
     * @param date 
     * @return Date Array 
     */
    getDateArrInMonth(date: Date): Date[] {
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
    getNumDayInMonth(date: Date): number{
        var dateMoment = moment(date);
        var startMoment = dateMoment.clone().startOf('month');
        var endMoment = dateMoment.clone().endOf('month');
        return moment.duration(endMoment.diff(startMoment)).days() + 1;
    }

    /**
     * Get Number of Week in Month with the specified date
     * @param date 
     * @return Number of Week in Month
     */
    getNumWeekInMonth(date: Date): number{
        var dateMoment = moment(date);
        var startMoment = dateMoment.clone().startOf('month');
        var endMoment = dateMoment.clone().endOf('month');
        return moment.duration(endMoment.diff(startMoment)).weeks();
    }

    /**
     * Get Day of Week with the specified date
     * 
     * @param date 
     * @return day of week (range from 0 to 6) Sunday: 0, Monday: 1, Tuesday: 1 ... Saturday: 6 
     */
    getDayOfWeek(date: Date): number{
        var dateMoment = moment(date);
        return dateMoment.days();
    }

    /**
     * Get Month
     * @param date 
     * 
     * The month retrieved by MomentJs would be from 0 - 11.
     * In this method, it would return acutal month which range is from 1 - 12.
     */
    getMonth(date: Date): number {
        if (date != null){
            var dateMoment = moment(date);
            return dateMoment.month() + 1;
        }
        return null;
    }

    /**
     * Get Year 
     * @param date 
     */
    getYear(date: Date): number {
        var dateMoment = moment(date);
        return dateMoment.year();
    }

    /**
     * Get Next Date
     * 
     * @param date 
     * @return next date
     */
    getNextDate(date: Date): Date {
        var dateMoment = moment(date);
        dateMoment.add(1, 'days');
        return dateMoment.toDate();
    }

    getPreviousMonth(date: Date): Date{
        var dateMoment = moment(date);
        dateMoment.subtract(1, 'month');
        return dateMoment.toDate();
    }

    getNextMonth(date: Date): Date{
        var dateMoment = moment(date);
        dateMoment.add(1, 'month');
        return dateMoment.toDate();
    }
}