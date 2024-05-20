
import Ticket from '../../../domain/model/Ticket/Ticket';
import GetNextTicketRepositoryPort from '../../../domain/port/driven/GetNextTicket/GetNextTicketRepositoryPort';
import GetNextTicketServicePort from '../../../domain/port/driver/GetNextTicket/GetNextTicketServicePort'

export default class GetNextTicketService implements GetNextTicketServicePort {
  constructor(private readonly getNextTicketRepository: GetNextTicketRepositoryPort){}

  getNextTicket = async(): Promise<Ticket> =>{
    return await this.getNextTicketRepository.getNextTicket();
  }
}
  
