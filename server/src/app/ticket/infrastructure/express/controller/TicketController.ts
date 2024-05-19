import { Request, Response } from "express"
import CreateTicketUseCasePort from "../../../domain/port/driver/CreateTicket/CreateTicketUseCasePort"
import TicketDTO from "../../../domain/model/TicketDTO/TicketDTO"
import GetNextTicketUseCasePort from "../../../domain/port/driver/GetNextTicket/GetNextTicketUseCasePort";
import GetQueueUseCasePort from "../../../domain/port/driver/GetQueue/GetQueueUseCasePort";

export default class TicketController {
    constructor(
        private readonly createTicketUseCase: CreateTicketUseCasePort,
        private readonly nexTicketUseCase: GetNextTicketUseCasePort,
        private readonly getQueueUseCase: GetQueueUseCasePort
    ){}

    //TYPE: BODY
    //appmtid:string
    public addTicket = (req: Request, res: Response): void => {
        try {            
            const ticket = req.body as TicketDTO;
            ticket.status = 'active';

            this.createTicketUseCase.createTicket(ticket).then(value => {
                res.status(200).json({created: value});
            }).catch((_error) => {
                res.status(500).json({error: 'Error de servidor'})
            })

        } catch (error) {
            res.status(500).json({error: true})
        }
    }

    public getNext = (_req: Request, res: Response): void => {
        try {            

            this.nexTicketUseCase.getNextTicket().then(ticket => {
                res.status(200).json(ticket);
            }).catch((_error) => {
                res.status(500).json({error: 'Error de servidor'})
            })

        } catch (error) {
            res.status(500).json({error: true})
        }
    }

    public getQueue = (_req: Request, res: Response): void => {
        try {            

            this.getQueueUseCase.getQueue().then(tickets => {
                res.status(200).json(tickets);
            }).catch((_error) => {
                res.status(500).json({error: 'Error de servidor'})
            })

        } catch (error) {
            res.status(500).json({error: true})
        }
    }
}