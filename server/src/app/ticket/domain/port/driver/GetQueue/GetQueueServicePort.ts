import TicketDTO from "../../../model/TicketDTO/TicketDTO";

export default interface GetQueueServicePort {
  getQueue(): Promise<TicketDTO[][]>
}
  
