
import Ticket from '../../../domain/model/Ticket/Ticket';
import TicketDTO from '../../../domain/model/TicketDTO/TicketDTO';
import CreateTicketServicePort from '../../../domain/port/driver/CreateTicket/CreateTicketServicePort';
import CreateTicketUseCasePort from '../../../domain/port/driver/CreateTicket/CreateTicketUseCasePort'

export default class CreateTicketUseCase implements CreateTicketUseCasePort {
  constructor(private readonly createTicketService: CreateTicketServicePort) {}

  createTicket = async(ticket: TicketDTO): Promise<Ticket> => {
    return await this.createTicketService.createTicket(ticket);
  }
}
  
