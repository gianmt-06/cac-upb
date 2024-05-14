import { Request, Response } from "express"
import CreateClientUseCasePort from "../../../domain/port/driver/CreateClient/CreateClientUseCasePort";
import ClientDTO from "../../../domain/model/ClientDTO/ClientDTO";
import GetClientUseCase from "../../../application/usecase/GetClient/GetClientUseCase";

export default class ClientController {
    constructor(
        private readonly createClientUseCase: CreateClientUseCasePort,
        private readonly getClientUseCase: GetClientUseCase
    ){}

    public createClient = (req: Request, res: Response): void => {
        try {
            const client = req.body as ClientDTO;
            
            this.createClientUseCase.createClient(client);
        
            res.status(200).json({created: true})
        } catch (error) {
            res.status(500).json({error: true})
        }
    }

    public getUserById = (req: Request, res: Response): void => {
        try {
            const id = req.params.idClient;
            const user = this.getClientUseCase.getClient(id);

            user.then(value => {                
                res.status(200).json({client: value});
            })
            
        } catch (error) {
            res.status(500).json({error: true})
        }
    }
}