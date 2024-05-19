import {TicketDTO} from "../../../model/TicketDTO/TicketDTO";

export default interface GetQueueUseCasePort {
  getQueue(): Promise<TicketDTO[][]>
}
  
