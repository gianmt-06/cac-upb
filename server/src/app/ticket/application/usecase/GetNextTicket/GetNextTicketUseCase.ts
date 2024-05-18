
import Ticket from '../../../domain/model/Ticket/Ticket';
import GetNextTicketServicePort from '../../../domain/port/driver/GetNextTicket/GetNextTicketServicePort';
import GetNextTicketUseCasePort from '../../../domain/port/driver/GetNextTicket/GetNextTicketUseCasePort'

export default class GetNextTicketUseCase implements GetNextTicketUseCasePort {
  constructor(private readonly getNextTicketService: GetNextTicketServicePort) {}

  getNextTicket = async(): Promise<Ticket> => {
    return await this.getNextTicketService.getNextTicket();
  }
}
  
