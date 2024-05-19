import { Request, Response } from "express"
import CreateClientUseCasePort from "../../../domain/port/driver/CreateClient/CreateClientUseCasePort";
import ClientDTO from "../../../domain/model/ClientDTO/ClientDTO";
import GetClientUseCase from "../../../application/usecase/GetClient/GetClientUseCase";
import Controller from "../../../../../express/controller/Controller";
export default class ClientController extends Controller{
    constructor(
        private readonly createClientUseCase: CreateClientUseCasePort,
        private readonly getClientUseCase: GetClientUseCase
    ){
        super()
    }

    //TYPE: BODY
    // idtype:string, doctype:string, docnumber:string, name:string, lastname:string, birth:string --> format:MM-DD-YY 
    public createClient = (req: Request, res: Response): void => {
        try {
            const client = req.body as ClientDTO;
            
            this.createClientUseCase.createClient(client).then(value => {
                value ?
                res.status(201).json(this.responseHandler.response("Cliente creado con exito")):
                res.status(400).json(this.responseHandler.throwError("Error al crear cliente"));

            }).catch(_error => {
                res.status(500).json(this.responseHandler.serverError())
            });

        } catch (error) {
            res.status(500).json(this.responseHandler.serverError())
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
                    res.status(404).json(this.responseHandler.throwError("Client not found"));
                    return;
                }             
                res.status(200).json(this.responseHandler.response("Cliente obtenido con exito", client));

            }).catch(_error => {
                res.status(500).json(this.responseHandler.serverError())
            });
            
        } catch (error) {
            res.status(500).json(this.responseHandler.serverError());
        }
    }

    //TYPE: PARAMS
    // document:string
    public getClientByDoc = (req: Request, res: Response): void => {
        try {
            const document = req.params.document;
            console.log(document);
            
            const databaseClient = this.getClientUseCase.getClientByDocument(document);

            databaseClient.then(client => {
                if(client.isNull()) {
                    res.status(404).json(this.responseHandler.throwError("Client not found"));
                    return;
                }             
                res.status(200).json(this.responseHandler.response("Cliente obtenido con exito", client));

            }).catch(_error => {
                res.status(500).json(this.responseHandler.serverError());
            });
            
        } catch (error) {
            res.status(500).json(this.responseHandler.serverError());
        }
    }
}