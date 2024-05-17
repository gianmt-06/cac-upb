
import Location from '../../../domain/model/location/Location';
import GetLocationsRepositoryPort from '../../../domain/port/driven/GetLocations/GetLocationsRepositoryPort';
import GetLocationsServicePort from '../../../domain/port/driver/GetLocations/GetLocationsServicePort'

export default class GetLocationsService implements GetLocationsServicePort {
  constructor(private readonly getLocationsRepository: GetLocationsRepositoryPort) {}
  
  public static readonly getClassName = (): string => {
    return 'GetLocationsService';
  }
  
  getLocations = async(): Promise<Location[]> => {
    return await this.getLocationsRepository.getLocations()
  }
}
  
