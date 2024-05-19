import Repository from "../../../../../shared/infrastructure/repository/Repository";
import Response from "../../../../shared/domain/model/APIResponse/Response";
import AbstractLocation from "../../../domain/model/location/AbstractLocation";
import Location from "../../../domain/model/location/Location";
import NullLocation from "../../../domain/model/location/NullLocation";
import LocationDTO from "../../../domain/model/locationDTO/LocationDTO";
import GetLocationsRepositoryPort from "../../../domain/port/driven/GetLocations/GetLocationsRepositoryPort";

export default class GetLocationsRepository implements GetLocationsRepositoryPort{
    constructor(private readonly clientRepository: Repository<Response<LocationDTO[]>>){}

    getLocations = async (): Promise<AbstractLocation[]> => {
        try {
            const response = await this.clientRepository.get(`http://localhost:5001/location/locations`);

            console.log(response);
            
            const locations = response.data.map(async (APILocation): Promise<Location> => {
          
                if(!APILocation) return new NullLocation()
                  return new Location(
                    APILocation.idLocation,
                    APILocation.city,
                    APILocation.state,
                    APILocation.name,
                    APILocation.address
                  )
              });
              
              return Promise.all(locations);
        } catch (error) {
            throw Error();
        }
    }
}