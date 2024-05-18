import Ticket from "../../../model/Ticket/Ticket";

export default interface GetNextTicketRepositoryPort {
  getNextTicket(): Promise<Ticket>
}
  
