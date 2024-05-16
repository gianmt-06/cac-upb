import ExpressRouter from "../../../../express/route/ExpressRouter";
import Database from "../../../../postgresql/database/Database";
import CreateAppmntService from "../../application/service/CreateAppmnt/CreateAppmntService";
import DeleteAppmntService from "../../application/service/DeleteAppmnt/DeleteAppmntService";
import ModifyAppmntService from "../../application/service/ModifyAppmnt/ModifyAppmntService";
import CreateAppmntUseCase from "../../application/usecase/CreateAppmnt/CreateAppmntUseCase";
import DeleteAppmntUseCase from "../../application/usecase/DeleteAppmnt/DeleteAppmntUseCase";
import ModifyAppmntUseCase from "../../application/usecase/ModifyAppmnt/ModifyAppmntUseCase";
import AppointmentController from "../express/controller/AppointmentController";
import AppointmentRouter from "../express/router/AppointmentRouter";
import AppmntRepository from "../repository/AppointmentRepository/AppmntRepository";
import CreateAppmntRepository from "../repository/CreateAppmnt/CreateAppmntRepository";
import DeleteAppmntRepository from "../repository/DeleteAppmnt/DeleteAppmntRepository";
import ModifyAppmntRepository from "../repository/ModifyAppmnt/ModifyAppmntRepository";

export default class AppointmentFactory {
    public static createRouter = (): ExpressRouter => {
        const database = Database.getInstance();
        const appmntRepository = new AppmntRepository(database);

        const createAppmntRepo = new CreateAppmntRepository(appmntRepository);
        const createAppmntService = new CreateAppmntService(createAppmntRepo);
        const createAppmntUsecase = new CreateAppmntUseCase(createAppmntService);

        const modifyAppmntRepo = new ModifyAppmntRepository(appmntRepository);
        const modifyAppmntService = new ModifyAppmntService(modifyAppmntRepo);
        const modifyAppmntUseCase = new ModifyAppmntUseCase(modifyAppmntService);

        const deleteAppmntRepo = new DeleteAppmntRepository(appmntRepository);
        const deleteAppmntService = new DeleteAppmntService(deleteAppmntRepo);
        const deleteAppmntUseCase = new DeleteAppmntUseCase(deleteAppmntService);

        const appmntController = new AppointmentController(
            createAppmntUsecase,
            modifyAppmntUseCase,
            deleteAppmntUseCase
        )

        return new AppointmentRouter(appmntController);
    } 
}