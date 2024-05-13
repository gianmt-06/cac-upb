import AbstractAppointment from "./AbstractAppointment";

export default class Appointment extends AbstractAppointment {
    public isNull(): boolean {
        return false
    }
}