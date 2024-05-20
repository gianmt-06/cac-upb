import Ticket from "../../../model/Ticket/Ticket";
import TicketDTO from "../../../model/TicketDTO/TicketDTO";

export default interface CreateTicketServicePort {
  createTicket(ticket: TicketDTO): Promise<Ticket>

}
  
