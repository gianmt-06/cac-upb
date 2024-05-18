import NullAppointment from "../../../../appointment/domain/model/appointment/NullAppointment";
import AbstractTicket from "./AbstractTicket";

export default class NullTicket extends AbstractTicket {
    constructor(){
        super(
            'no code found',
            0,
            'no status found',
            new NullAppointment()
        )
    }
}