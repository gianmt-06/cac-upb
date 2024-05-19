import Repository from "../../../../shared/infrastructure/repository/Repository";
import Response from "../../../shared/domain/model/APIResponse/Response";
import CreateAppmntService from "../../application/service/CreateAppmnt/CreateAppmntService";
import GetAppmntTypesService from "../../application/service/GetAppmntTypes/GetAppmntTypesService";
import ValidateAppmntService from "../../application/service/ValidateAppmnt/ValidatAppmntService";
import CreateAppmntUseCase from "../../application/usecase/CreateAppmnt/CreateAppmntUseCase";
import GetAppmntTypesUseCase from "../../application/usecase/GetAppmntTypes/GetAppmntTypesUseCase";
import ValidateAppmntUseCase from "../../application/usecase/ValidateAppmnt/ValidatAppmntUseCase";
import AppmntDTO from "../../domain/model/AppointmentDTO/AppmntDTO";
import AppmntTypeDTO from "../../domain/model/AppointmentDTO/AppmntTypeDTO";
import Appointment from "../../domain/model/appointment/Appointment";
import CreateAppmntUseCasePort from "../../domain/port/driver/CreateAppmnt/CreateAppmntUseCasePort";
import GetAppmntTypesUseCasePort from "../../domain/port/driver/GetAppmntTypes/GetAppmntTypesUseCasePort";
import ValidateAppmntUseCasePort from "../../domain/port/driver/ValidateAppmnt/ValidatAppmntUseCasePort";
import CreateAppmntRepository from "../repository/CreateAppmntRepository/CreateAppmntRepository";
import GetAppmntTypesRepository from "../repository/GetAppointmentTypes/GetAppmntTypesRepository";
import ValidateAppmntRepository from "../repository/ValidateAppmntRepository/ValidatAppmntRepository";

export default class AppmntUseCasesFactory {
    static locationRepository = new Repository<Response<AppmntTypeDTO[]>>;
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

    public static ValidateAppmntUseCase = (): ValidateAppmntUseCasePort => {
        const validateAppmntRepo = new ValidateAppmntRepository(new Repository<Response<Appointment>>);
        const validateAppmntService = new ValidateAppmntService(validateAppmntRepo);
        const validateAppmntUseCase = new ValidateAppmntUseCase(validateAppmntService);
        
        return validateAppmntUseCase;
    }
}