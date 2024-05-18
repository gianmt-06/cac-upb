import ExpressRouter from "../../../../express/route/ExpressRouter";
import CreateTicketService from "../../application/service/CreateTicket/CreateTicketService";
import GetNextTicketService from "../../application/service/GetNextTicket/GetNextTicketService";
import GetQueueService from "../../application/service/GetQueue/GetQueueService";
import GetQueueUseCase from "../../application/usecase/GetQueue/GetQueueUseCase";
import TicketController from "../express/controller/TicketController";
import TicketRouter from "../express/router/TicketRouter";
import TicketQueue from "../queue/TicketQueue";
import CreateTicketRepository from "../repository/CreateTicket/CreateTicketRepository";
import GetNextTicketRepository from "../repository/GetNextTicket/GetNextTicketRepository";
import GetQueueRepository from "../repository/GetQueue/GetQueueRepository";
import TicketRepository from "../repository/TicketRepository/TicketRepository";

export default class TicketFactory {
    
    public static createRouter = () : ExpressRouter => {
        const ticketQueue = TicketQueue.getInstance(2);        
        const ticketRepository = new TicketRepository(ticketQueue);

        const createTicketRepo = new CreateTicketRepository(ticketRepository);
        const createTicketService = new CreateTicketService(createTicketRepo);
        const createTicketUseCase = new CreateTicketService(createTicketService);

        const nextTicketRepo = new GetNextTicketRepository(ticketRepository);
        const nextTicketService = new GetNextTicketService(nextTicketRepo);
        const nextTicketUseCase = new GetNextTicketService(nextTicketService);

        const getQueueTicketRepo = new GetQueueRepository(ticketRepository);
        const getQueueService = new GetQueueService(getQueueTicketRepo);
        const getQueueUseCase = new GetQueueUseCase(getQueueService);

        const ticketController = new TicketController(
            createTicketUseCase,
            nextTicketUseCase,
            getQueueUseCase
        )

        return new TicketRouter(ticketController)
    }
}