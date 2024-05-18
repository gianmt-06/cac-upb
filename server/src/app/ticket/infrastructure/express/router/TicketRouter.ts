import { Router } from "express";
import ExpressRouter from "../../../../../express/route/ExpressRouter";
import LocationController from "../controller/LocationController";

export default class TicketRouter implements ExpressRouter {
    router: Router;
    path: string;
    version: string;

    constructor (
        private readonly locationController: LocationController  
    ) {
        this.router = Router();
        this.path = '/ticket'
        this.version = 'v1.0'
        this.setRoutes();  
    }

    setRoutes = () => {
        this.router.post('/add', this.locationController.getLocations.bind(this.locationController))
    };
}