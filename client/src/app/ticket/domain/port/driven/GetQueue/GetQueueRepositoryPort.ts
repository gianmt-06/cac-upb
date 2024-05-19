import TicketDTO from "../../../model/TicketDTO/TicketDTO";

export default interface GetQueueRepositoryPort {
  getQueue(): Promise<TicketDTO[][]>
}
  
