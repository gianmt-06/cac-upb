
import TicketDTO from '../../../domain/model/TicketDTO/TicketDTO';
import GetQueueUseCasePort from '../../../domain/port/driver/GetQueue/GetQueueUseCasePort'
import GetQueueService from '../../service/GetQueue/GetQueueService';

export default class GetQueueUseCase implements GetQueueUseCasePort {
  constructor(private readonly getQueueService: GetQueueService) {}

  getQueue = async(): Promise<TicketDTO[][]> => {
    return await this.getQueueService.getQueue();
  }
}
  
