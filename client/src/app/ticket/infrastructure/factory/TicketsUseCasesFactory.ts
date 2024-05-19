import Repository from "../../../../shared/infrastructure/repository/Repository";
import Response from "../../../shared/domain/model/APIResponse/Response";
import CreateTicketService from "../../application/service/CreateTicket/CreateTicketService";
import GetNextTicketService from "../../application/service/GetNextTicket/GetNextTicketService";
import CreateTicketUseCase from "../../application/usecase/CreateTicket/CreateTicketUseCase";
import GetNextTicketUseCase from "../../application/usecase/GetNextTicket/GetNextTicketUseCase";
import {TicketDTO, TicketResponse} from "../../domain/model/TicketDTO/TicketDTO";
import CreateTicketUseCasePort from "../../domain/port/driver/CreateTicket/CreateTicketUseCasePort";
import GetNextTicketUseCasePort from "../../domain/port/driver/GetNextTicket/GetNextTicketUseCasePort";
import CreateTicketRepository from "../repository/CreateTicketRepository/CreateTicketRepository";
import GetNextTicketRepository from "../repository/GetNextTicketRepository/GetNextTicketRepository";

export default class TicketsUseCasesFactory {
    static ticketRepository = new Repository<TicketDTO>;

    public static CreateTicketUseCase = (): CreateTicketUseCasePort => {
        const createTicketRepo = new CreateTicketRepository(this.ticketRepository);
        const createTicketService = new CreateTicketService(createTicketRepo);
        const createTicketUseCase = new CreateTicketUseCase(createTicketService);
        
        return createTicketUseCase;
    }

    public static GetTicketUseCase = (): GetNextTicketUseCasePort => {
        const getTicketRepo = new GetNextTicketRepository(new Repository<Response<TicketResponse>>);
        const getTicketService = new GetNextTicketService(getTicketRepo);
        const getTicketUseCase = new GetNextTicketUseCase(getTicketService);
        
        return getTicketUseCase;
    }
}