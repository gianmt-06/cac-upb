
import AbstractAppmntType from '../../../domain/model/AppointmentType/AbstractAppmntType';
import GetAppmntTypesServicePort from '../../../domain/port/driver/GetAppmntTypes/GetAppmntTypesServicePort'
import GetAppmntTypesUseCasePort from '../../../domain/port/driver/GetAppmntTypes/GetAppmntTypesUseCasePort'

export default class GetAppmntTypesUseCase implements GetAppmntTypesUseCasePort {
  constructor(private readonly getAppmntTypeService: GetAppmntTypesServicePort) {}

  getAppmntTypes = async(): Promise<AbstractAppmntType[]> => {
      return await this.getAppmntTypeService.getAppmntTypes();
  }
}
  
