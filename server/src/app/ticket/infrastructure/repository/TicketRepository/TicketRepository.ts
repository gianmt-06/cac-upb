import PriorityQueueInterface from "../../../../../queue/interface/PriorityQueueInterface";
import TicketDTO from "../../../domain/model/TicketDTO/TicketDTO";
import { TicketRepositoryPort } from "../../../domain/port/driven/TicketRepository/TicketRepositoryPort";

export default class TicketRepository implements TicketRepositoryPort {
    constructor(private readonly priorityQueue: PriorityQueueInterface<TicketDTO>){}

    getOne!: (key: string) => Promise<TicketDTO>;
    getAll!: () => Promise<TicketDTO[]>;
    update!: (key: string, partial: TicketDTO) => Promise<boolean>;
    delete!: (key: string) => Promise<boolean>;
    
    save = (ticket: TicketDTO): Promise<boolean> => {
        try {
            this.priorityQueue.insert(ticket, ticket.priority);
            this.priorityQueue.print();
            return Promise.resolve(true);
        } catch (error) {
            return Promise.resolve(false);
        }
    };
}