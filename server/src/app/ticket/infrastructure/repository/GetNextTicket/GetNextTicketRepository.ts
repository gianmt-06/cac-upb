
import NullAppointment from '../../../../appointment/domain/model/appointment/NullAppointment';
import NullTicket from '../../../domain/model/Ticket/NullTicket';
import Ticket from '../../../domain/model/Ticket/Ticket';
import GetNextTicketRepositoryPort from '../../../domain/port/driven/GetNextTicket/GetNextTicketRepositoryPort'
import { TicketRepositoryPort } from '../../../domain/port/driven/TicketRepository/TicketRepositoryPort';

export default class GetNextTicketRepository implements GetNextTicketRepositoryPort {
  constructor(private readonly ticketRepository: TicketRepositoryPort){}

  getNextTicket = async(): Promise<Ticket> => {
    try {
      const ticket = await this.ticketRepository.getNextTicket();

      return new Ticket(
        ticket.code,
        ticket.priority,
        ticket.status,
        new NullAppointment()
      )
    } catch (error) {
      return new NullTicket();
    }
  }

  
}
  
