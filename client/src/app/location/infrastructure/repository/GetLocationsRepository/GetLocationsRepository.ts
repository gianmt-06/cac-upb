import Repository from "../../../../../shared/infrastructure/repository/Repository";
import AbstractLocation from "../../../domain/model/location/AbstractLocation";
import LocationDTO from "../../../domain/model/locationDTO/LocationDTO";
import GetLocationsRepositoryPort from "../../../domain/port/driven/GetLocations/GetLocationsRepositoryPort";

export default class GetLocationsRepository implements GetLocationsRepositoryPort{
    constructor(private readonly clientRepository: Repository<LocationDTO>){}

    getLocations = async (): Promise<AbstractLocation[]> => {
        try {
            const response = await this.clientRepository.get(`http://localhost:5000/client/${id}`);
            const locations = response.locations;
            
        } catch (error) {
            throw Error();
        }
    }
}