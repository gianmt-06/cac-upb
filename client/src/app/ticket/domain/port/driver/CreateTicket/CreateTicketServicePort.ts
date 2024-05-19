import TicketDTO from "../../../model/TicketDTO/TicketDTO";

export default interface CreateTicketServicePort {
  createTicket(ticket: TicketDTO): Promise<TicketDTO>
}
  
