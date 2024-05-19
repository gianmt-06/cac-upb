
import {TicketDTO} from '../../../domain/model/TicketDTO/TicketDTO'
import CreateTicketRepositoryPort from '../../../domain/port/driven/CreateTicket/CreateTicketRepositoryPort'
import CreateTicketServicePort from '../../../domain/port/driver/CreateTicket/CreateTicketServicePort'

export default class CreateTicketService implements CreateTicketServicePort {
  constructor(private readonly createTicketRepository: CreateTicketRepositoryPort) {}

  createTicket = async (ticket: TicketDTO): Promise<TicketDTO> => {
    return await this.createTicketRepository.createTicket(ticket);
  }
}
  
