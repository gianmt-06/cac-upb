import Repository from "../../../../../shared/infrastructure/repository/Repository";
import AbstractLocation from "../../../domain/model/location/AbstractLocation";
import Location from "../../../domain/model/location/Location";
import NullLocation from "../../../domain/model/location/NullLocation";
import LocationDTO from "../../../domain/model/locationDTO/LocationDTO";
import GetLocationsRepositoryPort from "../../../domain/port/driven/GetLocations/GetLocationsRepositoryPort";

export default class GetLocationsRepository implements GetLocationsRepositoryPort{
    constructor(private readonly clientRepository: Repository<LocationDTO>){}

    getLocations = async (): Promise<AbstractLocation[]> => {
        try {
            const response = await this.clientRepository.get(`http://localhost:5000/location/locations`);
            const locations = response.locations.map(async (APILocation): Promise<Location> => {
          
                if(!APILocation) return new NullLocation()
                  return new Location(
                    APILocation.idLocation || "",
                    APILocation.city,
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