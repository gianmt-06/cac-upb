import { Request, Response } from "express"
import CreateTicketUseCasePort from "../../../domain/port/driver/CreateTicket/CreateTicketUseCasePort"
import TicketDTO from "../../../domain/model/TicketDTO/TicketDTO"

export default class TicketController {
    constructor(
        private readonly createTicketUseCase: CreateTicketUseCasePort,
    ){}

    public getLocations = (req: Request, res: Response): void => {
        try {            
            const ticket = req.body as TicketDTO;

            this.createTicketUseCase.createTicket(ticket).then(value => {
                res.status(200).json({created: value});
            }).catch((_error) => {
                res.status(500).json({error: 'Error de servidor'})
            })

        } catch (error) {
            res.status(500).json({error: true})
        }
    }
}