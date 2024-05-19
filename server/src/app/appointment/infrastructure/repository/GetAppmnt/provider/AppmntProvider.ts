import Client from "../../../../../client/domain/model/Client/Client";
import Location from "../../../../../location/domain/model/location/Location";
import AppmntDTO from "../../../../domain/model/AppointmentDTO/AppmntDTO";
import AppmntType from "../../../../domain/model/AppointmentType/AppmntType";
import Appointment from "../../../../domain/model/appointment/Appointment";

export default class AppointmentProvider {
    public getAppointment = (appmnt: AppmntDTO, client: Client, location: Location)=> {
        return new Appointment(
            new AppmntType(
              appmnt.idtype, appmnt.idtype
            ),
            appmnt.code,
            appmnt.description,
            appmnt.status,
            new Date(appmnt.date),
            client,
            location
        )
    }
}