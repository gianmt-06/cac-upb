import { Request, Response } from "express"
import CreateTicketUseCasePort from "../../../domain/port/driver/CreateTicket/CreateTicketUseCasePort"
import TicketDTO from "../../../domain/model/TicketDTO/TicketDTO"
import GetNextTicketUseCasePort from "../../../domain/port/driver/GetNextTicket/GetNextTicketUseCasePort";
import GetQueueUseCasePort from "../../../domain/port/driver/GetQueue/GetQueueUseCasePort";
import Controller from "../../../../../express/controller/Controller";

export default class TicketController extends Controller {
    constructor(
        private readonly createTicketUseCase: CreateTicketUseCasePort,
        private readonly nexTicketUseCase: GetNextTicketUseCasePort,
        private readonly getQueueUseCase: GetQueueUseCasePort
    ){
        super();
    }

    //TYPE: BODY
    //codeappmnt:string
    public addTicket = (req: Request, res: Response): void => {
        try {            
            const ticket = req.body as TicketDTO;
            ticket.status = 'active';

            this.createTicketUseCase.createTicket(ticket).then(value => {
                res.status(200).json(this.responseHandler.response("Ticket registrado con exito", value));
            })

        } catch (error) {
            res.status(500).json(this.responseHandler.serverError())
        }
    }

    public getNext = (_req: Request, res: Response): void => {
        try {            

            this.nexTicketUseCase.getNextTicket().then(ticket => {
                res.status(200).json(this.responseHandler.response("Ticket obtenido con exito", ticket));
            })

        } catch (error) {
            res.status(500).json(this.responseHandler.serverError())
        }
    }

    public getQueue = (_req: Request, res: Response): void => {
        try {            

            this.getQueueUseCase.getQueue().then(tickets => {
                res.status(200).json(this.responseHandler.response("Cola obtenida con exito", tickets));
            })

        } catch (error) {
            res.status(500).json(this.responseHandler.serverError());
        }
    }
}