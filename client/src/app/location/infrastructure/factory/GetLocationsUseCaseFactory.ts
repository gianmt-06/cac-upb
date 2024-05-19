import Repository from "../../../../shared/infrastructure/repository/Repository";
import Response from "../../../shared/domain/model/APIResponse/Response";
import GetLocationsService from "../../application/service/GetLocations/GetLocationsService";
import GetLocationsUseCase from "../../application/usecase/GetLocations/GetLocationsUseCase";
import LocationDTO from "../../domain/model/locationDTO/LocationDTO";
import GetLocationsRepository from "../repository/GetLocationsRepository/GetLocationsRepository";

export default class GetLocationsUseCaseFactory {
    public static createUseCase = (): GetLocationsUseCase => {
        const locationRepository = new Repository<Response<LocationDTO[]>>;

        const getLocationsRepo = new GetLocationsRepository(locationRepository);
        const getLocationsService = new GetLocationsService(getLocationsRepo);
        const getLocationsUseCase = new GetLocationsUseCase(getLocationsService);
        
        return getLocationsUseCase;
    }
}