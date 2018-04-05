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
        let startingDayOfWeek = 0; // Sunday
        let calendarWeeks: CalendarWeek[] = [];
        let calendarWeek: CalendarWeek = null;
        let dateArr: Date[]  = this.getDateArrInMonth(date);
        for (var i=0; i<dateArr.length; i++){
            var date = dateArr[i];
            if (calendarWeek == null){
                calendarWeek = new CalendarWeek();
            }else if (this.getDayOfWeek(date) == startingDayOfWeek ){
                calendarWeeks.push(calendarWeek);
                calendarWeek = new CalendarWeek();
            }
            if (calendarWeek.size() != 0 
                    || this.getDayOfWeek(date) == startingDayOfWeek ){
                calendarWeek.push(new CalendarDate(date));
            }else {
                var missingDays = this.getDayOfWeek(date) - startingDayOfWeek;
                while (missingDays > 0){
                    var missingDate: Date = this.getPreviousDate(date, missingDays);
                    calendarWeek.push(new CalendarDate(missingDate, false));
                    missingDays--;
                }
                calendarWeek.push(new CalendarDate(date));
            }
            
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
     * 
     * @param date 
     * @return month
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
     * @return year
     */
    getYear(date: Date): number {
        var dateMoment = moment(date);
        return dateMoment.year();
    }

    /**
     * Get Previous Date
     * @param date 
     * @param days (default 1 if null)
     * @return previous date
     */
    getPreviousDate(date: Date, days: number = 1): Date{
        var dateMoment = moment(date).clone();
        dateMoment.subtract(days, 'days');
        return dateMoment.toDate();
    }

    /**
     * Get Next Date
     * 
     * @param date 
     * @param days (default 1 if null)
     * 
     * @return next date
     */
    getNextDate(date: Date, days: number = 1): Date {
        var dateMoment = moment(date).clone();
        dateMoment.add(1, 'days');
        return dateMoment.toDate();
    }

    /**
     * Get Previous Date
     * @param date 
     * @param months (default 1 if null)
     * @return previous date
     */
    getPreviousMonth(date: Date, months: number = 1): Date{
        var dateMoment = moment(date).clone();
        dateMoment.subtract(months, 'months');
        return dateMoment.toDate();
    }

    /**
     * Get Next Month
     * @param date 
     * @param month (default 1 if null)
     * 
     * @return next month 
     */
    getNextMonth(date: Date, months: number = 1): Date{
        var dateMoment = moment(date).clone();
        dateMoment.add(months, 'months');
        return dateMoment.toDate();
    }
}