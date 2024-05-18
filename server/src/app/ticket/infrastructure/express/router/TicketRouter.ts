import { Router } from "express";
import ExpressRouter from "../../../../../express/route/ExpressRouter";
import TicketController from "../controller/TicketController";

export default class TicketRouter implements ExpressRouter {
    router: Router;
    path: string;
    version: string;

    constructor (
        private readonly ticketController: TicketController  
    ) {
        this.router = Router();
        this.path = '/ticket'
        this.version = 'v1.0'
        this.setRoutes();  
    }

    setRoutes = () => {
        this.router.get('/next', this.ticketController.getNext.bind(this.ticketController))
        this.router.get('/queue', this.ticketController.getQueue.bind(this.ticketController))
        this.router.post('/add', this.ticketController.getLocations.bind(this.ticketController))
    };
}