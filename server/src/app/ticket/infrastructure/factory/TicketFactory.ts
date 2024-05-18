import ExpressRouter from "../../../../express/route/ExpressRouter";
import CreateTicketService from "../../application/service/CreateTicket/CreateTicketService";
import TicketController from "../express/controller/LocationController";
import TicketRouter from "../express/router/TicketRouter";
import TicketQueue from "../queue/TicketQueue";
import CreateTicketRepository from "../repository/CreateTicket/CreateTicketRepository";
import TicketRepository from "../repository/TicketRepository/TicketRepository";

export default class TicketFactory {
    
    public static createRouter = () : ExpressRouter => {
        const ticketQueue = TicketQueue.getInstance(2);        
        const ticketRepository = new TicketRepository(ticketQueue);

        const createTicketRepo = new CreateTicketRepository(ticketRepository);
        const createTicketService = new CreateTicketService(createTicketRepo);
        const createTicketUseCase = new CreateTicketService(createTicketService);

        const ticketController = new TicketController(
            createTicketUseCase
        )

        return new TicketRouter(ticketController)
    }
}