
import Location from '../../../domain/model/location/Location'
import GetLocationsServicePort from '../../../domain/port/driver/GetLocations/GetLocationsServicePort';
import GetLocationsUseCasePort from '../../../domain/port/driver/GetLocations/GetLocationsUseCasePort'

export default class GetLocationsUseCase implements GetLocationsUseCasePort {
  constructor(private readonly getLocationsService: GetLocationsServicePort) {}

  public static readonly getClassName = (): string => {
    return 'GetLocationsUseCase';
  }

  getLocations = async(): Promise<Location[]> => {
    return this.getLocationsService.getLocations();
  }
}
  
