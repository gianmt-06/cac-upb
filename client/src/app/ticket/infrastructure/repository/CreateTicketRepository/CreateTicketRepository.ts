import Repository from "../../../../../shared/infrastructure/repository/Repository";
import {TicketDTO} from "../../../domain/model/TicketDTO/TicketDTO";
import CreateTicketRepositoryPort from "../../../domain/port/driven/CreateTicket/CreateTicketRepositoryPort";

export default class CreateTicketRepository implements CreateTicketRepositoryPort {
    constructor(private readonly ticketRepository: Repository<TicketDTO>){}

    createTicket = async(ticket: TicketDTO): Promise<TicketDTO> => {
        return await this.ticketRepository.post("http://localhost:5001/ticket/generate", ticket)
    }
}