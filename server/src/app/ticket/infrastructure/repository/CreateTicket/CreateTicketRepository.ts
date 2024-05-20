
import TicketDTO from '../../../domain/model/TicketDTO/TicketDTO'
import CreateTicketRepositoryPort from '../../../domain/port/driven/CreateTicket/CreateTicketRepositoryPort'
import { TicketRepositoryPort } from '../../../domain/port/driven/TicketRepository/TicketRepositoryPort'
import AppointmentProvider from '../../../../shared/infrastructure/repository/providers/AppointmentProvider'
import Ticket from '../../../domain/model/Ticket/Ticket'
import NullTicket from '../../../domain/model/Ticket/NullTicket'
import { getAge } from '../../../../util/GetAge'
import { getPriority } from '../../../../helper/getTicketPriority'

export default class CreateTicketRepository implements CreateTicketRepositoryPort {
  private readonly getAppmntProvider: AppointmentProvider;

  constructor(private readonly ticketRepository: TicketRepositoryPort) {
    this.getAppmntProvider = new AppointmentProvider();
  }

  createTicket = async(ticket: TicketDTO): Promise<Ticket> => {
    try {
      const appmtProvider = new AppointmentProvider();
      const appmnt = await appmtProvider.getAppointment(ticket.codeappmnt);
      
      //const date = appmnt.getDate();
      const client = appmnt.getClient();
      const age = getAge(client.getBirth());
      const type =  client.getType().id;
    
      ticket.priority = getPriority(age, type);
    
      const response = await this.ticketRepository.save(ticket);

      if(!response) throw Error;
  
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
  
