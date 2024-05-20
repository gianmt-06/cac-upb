import Ticket from "../../../model/Ticket/Ticket";
import TicketDTO from "../../../model/TicketDTO/TicketDTO";

export default interface CreateTicketRepositoryPort {
  createTicket(ticket: TicketDTO): Promise<Ticket>
}
  
