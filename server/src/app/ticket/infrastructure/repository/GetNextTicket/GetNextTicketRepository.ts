
import NullTicket from '../../../domain/model/Ticket/NullTicket';
import Ticket from '../../../domain/model/Ticket/Ticket';
import GetNextTicketRepositoryPort from '../../../domain/port/driven/GetNextTicket/GetNextTicketRepositoryPort'
import { TicketRepositoryPort } from '../../../domain/port/driven/TicketRepository/TicketRepositoryPort';
import AppointmentProvider from '../../../../shared/infrastructure/repository/providers/AppointmentProvider';

export default class GetNextTicketRepository implements GetNextTicketRepositoryPort {
  private readonly getAppmntProvider: AppointmentProvider;

  constructor(private readonly ticketRepository: TicketRepositoryPort){
    this.getAppmntProvider = new AppointmentProvider();
  }

  getNextTicket = async(): Promise<Ticket> => {
    try {
      const ticket = await this.ticketRepository.getNextTicket();

      return new Ticket(
        ticket.code,
        ticket.priority,
        ticket.status,
        await this.getAppmntProvider.getAppointment(ticket.codeappmnt)
      )
    } catch (error) {
      return new NullTicket();
    }
  }
  
}
  
