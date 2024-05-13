import ExpressRouter from "../../../../express/route/ExpressRouter";
import CreateAppmntService from "../../application/service/CreateAppmnt/CreateAppmntService";
import CreateAppmntUseCase from "../../application/usecase/CreateAppmnt/CreateAppmntUseCase";
import AppointmentController from "../express/controller/AppointmentController";
import AppointmentRouter from "../express/router/AppointmentRouter";
import CreateAppmntRepository from "../repository/AppointmentRepository/CreateAppmnt/CreateAppmntRepository";

export default class AppointmentFactory {
    public createRouter = (): ExpressRouter => {
        const createAppmntRepo = new CreateAppmntRepository();
        const createAppmntService = new CreateAppmntService(createAppmntRepo);
        const createAppmntUsecase = new CreateAppmntUseCase(createAppmntService);

        const appmntController = new AppointmentController(
            createAppmntUsecase
        )

        return new AppointmentRouter(appmntController);
    } 
}