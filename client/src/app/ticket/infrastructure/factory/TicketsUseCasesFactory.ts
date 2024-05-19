import Repository from "../../../../shared/infrastructure/repository/Repository";
import CreateTicketService from "../../application/service/CreateTicket/CreateTicketService";
import CreateTicketUseCase from "../../application/usecase/CreateTicket/CreateTicketUseCase";
import TicketDTO from "../../domain/model/TicketDTO/TicketDTO";
import CreateTicketUseCasePort from "../../domain/port/driver/CreateTicket/CreateTicketUseCasePort";
import CreateTicketRepository from "../repository/CreateTicketRepository/CreateTicketRepository";

export default class TicketsUseCasesFactory {
    static ticketRepository = new Repository<TicketDTO>;

    public static CreateTicketUseCase = (): CreateTicketUseCasePort => {
        const createTicketRepo = new CreateTicketRepository(this.ticketRepository);
        const createTicketService = new CreateTicketService(createTicketRepo);
        const createTicketUseCase = new CreateTicketUseCase(createTicketService);
        
        return createTicketUseCase;
    }
}