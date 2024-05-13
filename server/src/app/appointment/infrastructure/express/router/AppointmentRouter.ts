import { Router } from "express";
import ExpressRouter from "../../../../../express/route/ExpressRouter";
import AppointmentController from "../controller/AppointmentController";

export default class AppointmentRouter implements ExpressRouter {
    router: Router;
    path: string;
    version: string;

    constructor (
        private readonly appmntController: AppointmentController 
    ) {
        this.router = Router();
        this.path = '/appointment'
        this.version = 'v1.0'
        this.setRoutes();
    }

    setRoutes = () => {
        this.router.get('/appointments', this.appmntController.createAppmnt.bind(this.appmntController))
    };

}