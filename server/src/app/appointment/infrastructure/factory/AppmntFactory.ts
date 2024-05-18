import ExpressRouter from "../../../../express/route/ExpressRouter";
import Database from "../../../../postgresql/database/Database";
import CreateAppmntService from "../../application/service/CreateAppmnt/CreateAppmntService";
import DeleteAppmntService from "../../application/service/DeleteAppmnt/DeleteAppmntService";
import GetAppmntService from "../../application/service/GetAppmnt/GetAppmntService";
import GetAppmntTypesService from "../../application/service/GetAppmntTypes/GetAppmntTypesService";
import ModifyAppmntService from "../../application/service/ModifyAppmnt/ModifyAppmntService";
import CreateAppmntUseCase from "../../application/usecase/CreateAppmnt/CreateAppmntUseCase";
import DeleteAppmntUseCase from "../../application/usecase/DeleteAppmnt/DeleteAppmntUseCase";
import GetAppmntUseCase from "../../application/usecase/GetAppmnt/GetAppmntUseCase";
import GetAppmntTypesUseCase from "../../application/usecase/GetAppmntTypes/GetAppmntTypesUseCase";
import ModifyAppmntUseCase from "../../application/usecase/ModifyAppmnt/ModifyAppmntUseCase";
import AppointmentController from "../express/controller/AppointmentController";
import AppointmentRouter from "../express/router/AppointmentRouter";
import AppmntRepository from "../repository/AppointmentRepository/AppmntRepository";
import AppointmentTypeRepository from "../repository/AppointmentRepository/AppmntTypesRepository";
import CreateAppmntRepository from "../repository/CreateAppmnt/CreateAppmntRepository";
import DeleteAppmntRepository from "../repository/DeleteAppmnt/DeleteAppmntRepository";
import GetAppmntRepository from "../repository/GetAppmnt/GetAppmntRepository";
import GetAppmntTypesRepository from "../repository/GetAppmntTypes/GetAppmntTypesRepository";
import ModifyAppmntRepository from "../repository/ModifyAppmnt/ModifyAppmntRepository";

export default class AppointmentFactory {
    public static createRouter = (): ExpressRouter => {
        const database = Database.getInstance();
        const appmntRepository = new AppmntRepository(database);
        const appmntTypeRepository = new AppointmentTypeRepository(database);
        
        const createAppmntRepo = new CreateAppmntRepository(appmntRepository);
        const createAppmntService = new CreateAppmntService(createAppmntRepo);
        const createAppmntUsecase = new CreateAppmntUseCase(createAppmntService);

        const modifyAppmntRepo = new ModifyAppmntRepository(appmntRepository);
        const modifyAppmntService = new ModifyAppmntService(modifyAppmntRepo);
        const modifyAppmntUseCase = new ModifyAppmntUseCase(modifyAppmntService);

        const deleteAppmntRepo = new DeleteAppmntRepository(appmntRepository);
        const deleteAppmntService = new DeleteAppmntService(deleteAppmntRepo);
        const deleteAppmntUseCase = new DeleteAppmntUseCase(deleteAppmntService);

        const getAppmentTypesRepo = new GetAppmntTypesRepository(appmntTypeRepository);
        const getAppmntTypesService = new GetAppmntTypesService(getAppmentTypesRepo);
        const getAppmntTypesUseCase = new GetAppmntTypesUseCase(getAppmntTypesService);

        const getAppmntRepo = new GetAppmntRepository(appmntRepository);
        const getAppmntService = new GetAppmntService(getAppmntRepo);
        const getAppmntUseCase = new GetAppmntUseCase(getAppmntService);

        const appmntController = new AppointmentController(
            getAppmntUseCase,
            createAppmntUsecase,
            modifyAppmntUseCase,
            deleteAppmntUseCase,
            getAppmntTypesUseCase
        )

        return new AppointmentRouter(appmntController);
    } 
}