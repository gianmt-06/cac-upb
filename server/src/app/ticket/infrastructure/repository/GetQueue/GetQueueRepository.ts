
import TicketDTO from '../../../domain/model/TicketDTO/TicketDTO';
import GetQueueRepositoryPort from '../../../domain/port/driven/GetQueue/GetQueueRepositoryPort'
import { TicketRepositoryPort } from '../../../domain/port/driven/TicketRepository/TicketRepositoryPort';

export default class GetQueueRepository implements GetQueueRepositoryPort {
  constructor(private readonly ticketRepository: TicketRepositoryPort) {}

  getQueue = async(): Promise<TicketDTO[][]> => {
    return await this.ticketRepository.getQueue();
  }  
}
  
