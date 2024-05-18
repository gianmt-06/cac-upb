import Repository from "../../../../shared/infrastructure/repository/Repository";
import CreateAppmntService from "../../application/service/CreateAppmnt/CreateAppmntService";
import GetAppmntTypesService from "../../application/service/GetAppmntTypes/GetAppmntTypesService";
import CreateAppmntUseCase from "../../application/usecase/CreateAppmnt/CreateAppmntUseCase";
import GetAppmntTypesUseCase from "../../application/usecase/GetAppmntTypes/GetAppmntTypesUseCase";
import AppmntDTO from "../../domain/model/AppointmentDTO/AppmntDTO";
import AppmntTypeDTO from "../../domain/model/AppointmentDTO/AppmntTypeDTO";
import CreateAppmntUseCasePort from "../../domain/port/driver/CreateAppmnt/CreateAppmntUseCasePort";
import GetAppmntTypesUseCasePort from "../../domain/port/driver/GetAppmntTypes/GetAppmntTypesUseCasePort";
import CreateAppmntRepository from "../repository/CreateAppmntRepository/CreateAppmntRepository";
import GetAppmntTypesRepository from "../repository/GetAppointmentTypes/GetAppmntTypesRepository";

export default class AppmntUseCasesFactory {
    static locationRepository = new Repository<AppmntTypeDTO>;
    static appmntRepository = new Repository<AppmntDTO>;

    public static GetAppmntTypesUseCase = (): GetAppmntTypesUseCasePort => {
        const getLocationsRepo = new GetAppmntTypesRepository(this.locationRepository);
        const getLocationsService = new GetAppmntTypesService(getLocationsRepo);
        const getLocationsUseCase = new GetAppmntTypesUseCase(getLocationsService);
        
        return getLocationsUseCase;
    }

    public static CreateAppmntUseCase = (): CreateAppmntUseCasePort => {
        const createAppmntRepo = new CreateAppmntRepository(this.appmntRepository);
        const createAppmntService = new CreateAppmntService(createAppmntRepo);
        const createAppmntUseCase = new CreateAppmntUseCase(createAppmntService);
        
        return createAppmntUseCase;
    }
}