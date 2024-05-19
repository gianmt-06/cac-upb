import Repository from "../../../../../shared/infrastructure/repository/Repository"
import AppmntType from "../../../../appointment/domain/model/AppointmentType/AppmntType";
import Appointment from "../../../../appointment/domain/model/appointment/Appointment";
import Client from "../../../../client/domain/model/Client/Client";
import Location from "../../../../location/domain/model/location/Location";
import Response from "../../../../shared/domain/model/APIResponse/Response";
import Ticket from "../../../domain/model/Ticket/Ticket"
import { TicketResponse } from "../../../domain/model/TicketDTO/TicketDTO";
import GetNextTicketRepositoryPort from "../../../domain/port/driven/GetNextTicket/GetNextTicketRepositoryPort"

export default class GetNextTicketRepository implements GetNextTicketRepositoryPort {
    constructor(private readonly ticketRepository: Repository<Response<TicketResponse>>){}

    getNextTicket = async (): Promise<Ticket> => {
        const response = await this.ticketRepository.get("http://localhost:5001/ticket/next");
        
        const ticket = response.data;
        const appmnt = ticket.appointment;

        return new Ticket(
            ticket.code,
            ticket.priority,
            ticket.status,
            new Appointment(
                new AppmntType(
                    appmnt.appmntType.idType,
                    appmnt.appmntType.description
                ),
                appmnt.code,
                appmnt.description,
                appmnt.status,
                new Date(appmnt.date),
                new Client(
                    appmnt.client.name,
                    appmnt.client.lastname,
                    appmnt.client.docNumber,
                    appmnt.client.docType,
                    appmnt.client.typeClient,
                    new Date(appmnt.client.birth),
                    appmnt.client.idClient
                ),
                new Location(
                    appmnt.location.idLocation,
                    appmnt.location.city,
                    appmnt.location.state,
                    appmnt.location.name,
                    appmnt.location.address
                )
            )
        );
    }
}