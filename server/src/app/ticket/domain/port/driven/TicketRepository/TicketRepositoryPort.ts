import Repository from "../../../../../shared/infrastructure/repository/Repository";
import TicketDTO from "../../../model/TicketDTO/TicketDTO";

export interface TicketRepositoryPort extends Repository<TicketDTO, string> {
    getNextTicket: () => Promise<TicketDTO>;
    getQueue: () => Promise<TicketDTO[][]>;
}