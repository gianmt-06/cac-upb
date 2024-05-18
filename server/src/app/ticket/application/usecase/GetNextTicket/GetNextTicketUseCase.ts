
import Ticket from '../../../domain/model/Ticket/Ticket';
import GetNextTicketUseCasePort from '../../../domain/port/driver/GetNextTicket/GetNextTicketUseCasePort'

export default class GetNextTicketUseCase implements GetNextTicketUseCasePort {

  constructor(private readonly getNextUseCase: ) {}

  getNextTicket(): Promise<Ticket> {
    throw new Error('Method not implemented.');
  }

}
  
