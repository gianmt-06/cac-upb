import {TicketDTO} from "../../../model/TicketDTO/TicketDTO";

export default interface CreateTicketRepositoryPort {
  createTicket(ticket: TicketDTO): Promise<TicketDTO>
}
  
