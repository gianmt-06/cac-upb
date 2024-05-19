import Ticket from "../../../model/Ticket/Ticket";

export default interface GetNextTicketUseCasePort {
  getNextTicket(): Promise<Ticket>
}
  
