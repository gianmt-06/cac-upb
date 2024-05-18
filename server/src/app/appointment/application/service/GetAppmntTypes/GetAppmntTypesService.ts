
import AbstractAppmntType from '../../../domain/model/AppointmentType/AbstractAppmntType';
import GetAppmntTypesRepositoryPort from '../../../domain/port/driven/GetAppmntTypes/GetAppmntTypesRepositoryPort';
import GetAppmntTypesServicePort from '../../../domain/port/driver/GetAppmntTypes/GetAppmntTypesServicePort'

export default class GetAppmntTypesService implements GetAppmntTypesServicePort {
  constructor(private readonly getAppmntTypesRepository: GetAppmntTypesRepositoryPort) {}

  getAppmntTypes(): Promise<AbstractAppmntType[]> {
    return this.getAppmntTypesRepository.getAppmntTypes();
  }
}
  
