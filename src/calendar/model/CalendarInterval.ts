
export class CalendarInterval{
    
    private start: Date;
    private end: Date;

    constructor(start: Date, end: Date){
        this.start = start;
        this.end = end;
    }

    public getStart(): Date{
        return this.start;
    }

    public getEnd(): Date{
        return this.end;
    }
}