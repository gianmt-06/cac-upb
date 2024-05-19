import { Request, Response } from "express"
import CreateClientUseCasePort from "../../../domain/port/driver/CreateClient/CreateClientUseCasePort";
import ClientDTO from "../../../domain/model/ClientDTO/ClientDTO";
import GetClientUseCase from "../../../application/usecase/GetClient/GetClientUseCase";
export default class ClientController {
    constructor(
        private readonly createClientUseCase: CreateClientUseCasePort,
        private readonly getClientUseCase: GetClientUseCase
    ){}

    //TYPE: BODY
    // idtype:string, doctype:string, docnumber:string, name:string, lastname:string, birth:string --> format:MM-DD-YY 
    public createClient = (req: Request, res: Response): void => {
        try {
            const client = req.body as ClientDTO;
            
            this.createClientUseCase.createClient(client).then(value => {
                value ?
                res.status(201).json({created: value}):
                res.status(400).json({created: value});

            }).catch(_error => {
                res.status(500).json({error: true, message: "Error de servidor"})
            });

        } catch (error) {
            res.status(500).json({error: true, message: "Error de servidor"})
        }
    }

    //TYPE: PARAMS
    // idClient:number
    public getUserById = (req: Request, res: Response): void => {
        try {
            const id = req.params.idClient;
            const databaseClient = this.getClientUseCase.getClientById(id);

            databaseClient.then(client => {
                if(client.isNull()) {
                    res.status(404).json({error: true, message: "Client not found"});
                    return;
                }             
                res.status(200).json(client);

            }).catch(_error => {
                res.status(500).json({error: true, message: "Error de servidor"})
            });
            
        } catch (error) {
            res.status(500).json({error: error, message: "Error de servidor"})
        }
    }

    //TYPE: PARAMS
    // document:string
    public getClientByDoc = (req: Request, res: Response): void => {
        try {
            const document = req.params.document;
            const databaseClient = this.getClientUseCase.getClientByDocument(document);

            databaseClient.then(client => {
                if(client.isNull()) {
                    res.status(404).json({error: true, message: "Client not found"});
                    return;
                }             
                res.status(200).json(client);

            }).catch(_error => {
                res.status(500).json({error: true, message: "Error de servidor"})
            });
            
        } catch (error) {
            res.status(500).json({error: error, message: "Error de servidor"})
        }
    }
}