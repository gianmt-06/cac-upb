import AbstractAppointment from "../../../../appointment/domain/model/appointment/AbstractAppointment";

export default class AbstractTicket {
    private code: string;
    private priority: string;
    private status: string;
    private appointment: AbstractAppointment;
    
    constructor(code: string, priority: string, status: string, appointment: AbstractAppointment){
        this.code = code;
        this.priority = priority;
        this.status = status;
        this.appointment = appointment;
    }
    
    public getCode(): string {
        return this.code;
    }
    
    public setCode(value: string) {
        this.code = value;
    }
    
    public getPriority(): string {
        return this.priority;
    }
    public setPriority(value: string) {
        this.priority = value;
    }
    
    public getStatus(): string {
        return this.status;
    }
    public setStatus(value: string) {
        this.status = value;
    }

    public getAppointment(): AbstractAppointment {
        return this.appointment;
    }
    public setAppointment(value: AbstractAppointment) {
        this.appointment = value;
    }
}