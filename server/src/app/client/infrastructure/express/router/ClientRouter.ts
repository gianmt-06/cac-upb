import { Router } from "express";
import ExpressRouter from "../../../../../express/route/ExpressRouter";
import ClientController from "../controller/ClientController";


export default class ClientRouter implements ExpressRouter {
    router: Router;
    path: string;
    version: string;

    constructor (
        private readonly clientController: ClientController 
    ) {
        this.router = Router();
        this.path = '/client'
        this.version = 'v1.0'
        this.setRoutes();  
    }

    setRoutes = () => {
        this.router.post('/create', this.clientController.createClient.bind(this.clientController));
        this.router.get('/id/:idClient', this.clientController.getUserById.bind(this.clientController))
        this.router.get('/document/:document', this.clientController.getClientByDoc.bind(this.clientController))
    };
}