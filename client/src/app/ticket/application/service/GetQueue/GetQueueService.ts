
import TicketDTO from '../../../domain/model/TicketDTO/TicketDTO';
import GetQueueRepositoryPort from '../../../domain/port/driven/GetQueue/GetQueueRepositoryPort';
import GetQueueServicePort from '../../../domain/port/driver/GetQueue/GetQueueServicePort'

export default class GetQueueService implements GetQueueServicePort {
  constructor(private readonly getQueueRepository: GetQueueRepositoryPort) {}

  getQueue = async(): Promise<TicketDTO[][]> => {
    return await this.getQueueRepository.getQueue();
  }  
}
  
