import Ticket from "../../../model/Ticket/Ticket";

export default interface GetNextTicketServicePort {
  getNextTicket(): Promise<Ticket>
}
  
