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
        this.router.get('/types', this.appmntController.getAppmntTypes.bind(this.appmntController));
        this.router.post('/create', this.appmntController.createAppmnt.bind(this.appmntController));
        this.router.post('/validate', this.appmntController.getAppmnt.bind(this.appmntController));
        this.router.put('/update/:code', this.appmntController.updateAppmnt.bind(this.appmntController));
        this.router.delete('/cancel/:code', this.appmntController.deleteAppmnt.bind(this.appmntController));

        // this.router.get('/dates', this.appmntController.getAppmntTypes.bind(this.appmntController));
        this.router.get('/times', this.appmntController.getAppmntTypes.bind(this.appmntController));
        
    };

}