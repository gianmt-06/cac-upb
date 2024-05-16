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
        this.router.get('/healty', this.appmntController.checkHealty.bind(this.appmntController));
        this.router.post('/create', this.appmntController.createAppmnt.bind(this.appmntController));
        this.router.post('/update/:idAppmnt', this.appmntController.updateAppmnt.bind(this.appmntController));
        this.router.delete('/:idAppmnt', this.appmntController.deleteAppmnt.bind(this.appmntController));
    };

}