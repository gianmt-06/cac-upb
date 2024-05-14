import { Request, Response } from "express"
import CreateClientUseCasePort from "../../../domain/port/driver/CreateClient/CreateClientUseCasePort";
import ClientDTO from "../../../domain/model/ClientDTO/ClientDTO";

export default class ClientController {
    constructor(
        private readonly createClientUseCase: CreateClientUseCasePort
    ){}

    public createClient = (req: Request, res: Response): void => {
        try {
            const client = req.body as ClientDTO;
            
            this.createClientUseCase.createClient(client)
        
            res.status(200).json({created: true})
        } catch (error) {
            res.status(500).json({error: true})
        }
    }

    // public getUserById = (req: Request, res: Response): void => {
    //     try {
    //         const id = req.params.idUser;
    //         const user = this.getUserUseCase.getUserById(id);

    //         user.then(value => {
    //             res.status(200).json({user: value})
    //         })
            
    //     } catch (error) {
    //         res.status(500).json({error: true})
    //     }
    // }
}