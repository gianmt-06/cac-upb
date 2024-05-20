import Ticket from "../../../model/Ticket/Ticket";
import TicketDTO from "../../../model/TicketDTO/TicketDTO";

export default interface CreateTicketUseCasePort {
  createTicket(ticket: TicketDTO): Promise<Ticket>
}
  
