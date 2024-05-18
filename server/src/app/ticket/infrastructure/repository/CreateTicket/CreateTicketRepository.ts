
import TicketDTO from '../../../domain/model/TicketDTO/TicketDTO'
import CreateTicketRepositoryPort from '../../../domain/port/driven/CreateTicket/CreateTicketRepositoryPort'
import { TicketRepositoryPort } from '../../../domain/port/driven/TicketRepository/TicketRepositoryPort'

export default class CreateTicketRepository implements CreateTicketRepositoryPort {
  constructor(private readonly ticketRepository: TicketRepositoryPort) {}

  createTicket = async(ticket: TicketDTO): Promise<boolean> => {
    return await this.ticketRepository.save(ticket);
  }
}
  
