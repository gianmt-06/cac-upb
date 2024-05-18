import NullClient from "../../../../client/domain/model/Client/NullClient";
import NullLocation from "../../../../location/domain/model/location/NullLocation";
import NullAppmntType from "../AppointmentType/NullAppmntType";
import AbstractAppointment from "./AbstractAppointment";

export default class NullAppointment extends AbstractAppointment {
    constructor(){
        super(
            new NullAppmntType(),
            'not found code in database',
            'not found description in database',
            'not found status in database',
            new Date(),
            new NullClient(),
            new NullLocation()
        )
    }

    public isNull(): boolean {
        return true    
    }
}