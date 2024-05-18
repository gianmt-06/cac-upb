import NullAppointment from "../../../../appointment/domain/model/appointment/NullAppointment";
import AbstractTicket from "./AbstractTicket";

export default class NullTicket extends AbstractTicket {
    constructor(){
        super(
            'no code found',
            'no priority found',
            'no status found',
            new NullAppointment()
        )
    }
}