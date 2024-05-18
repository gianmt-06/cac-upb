
import AbstractAppmntType from '../../../domain/model/AppointmentType/AbstractAppmntType';
import GetAppmntTypesServicePort from '../../../domain/port/driver/GetAppmntTypes/GetAppmntTypesServicePort'
import GetAppmntTypesUseCasePort from '../../../domain/port/driver/GetAppmntTypes/GetAppmntTypesUseCasePort'

export default class GetAppmntTypesUseCase implements GetAppmntTypesUseCasePort {
  constructor(private readonly getAppmntTypeService: GetAppmntTypesServicePort) {}

  getAppmntTypes(): Promise<AbstractAppmntType[]> {
    return this.getAppmntTypeService.getAppmntTypes();
  }
}
  
