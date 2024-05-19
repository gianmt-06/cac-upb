
import AbstractAppointment from '../../../domain/model/appointment/AbstractAppointment';
import GetAppmntServicePort from '../../../domain/port/driver/GetAppmnt/GetAppmntServicePort';
import GetAppmntUseCasePort from '../../../domain/port/driver/GetAppmnt/GetAppmntUseCasePort'

export default class GetAppmntUseCase implements GetAppmntUseCasePort {
  constructor(private readonly getAppmntService: GetAppmntServicePort) {}
  
  getAppmnt = async(codeAppmnt: string, docClient: string, date: Date): Promise<AbstractAppointment> => {
    return await this.getAppmntService.getAppmnt(codeAppmnt, docClient, date);
  }
  
  getAppmntById = async(id: string): Promise<AbstractAppointment> => {
    return await this.getAppmntService.getAppmntById(id);
  }
}
  
