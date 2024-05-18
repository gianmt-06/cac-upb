
import Appointment from '../../../domain/model/appointment/Appointment';
import GetAppmntServicePort from '../../../domain/port/driver/GetAppmnt/GetAppmntServicePort';
import GetAppmntUseCasePort from '../../../domain/port/driver/GetAppmnt/GetAppmntUseCasePort'

export default class GetAppmntUseCase implements GetAppmntUseCasePort {
  constructor(private readonly getAppmntService: GetAppmntServicePort) {}
  
  getAppmnt = async(codeAppmnt: string, docClient: string, date: Date): Promise<Appointment> => {
    return await this.getAppmntService.getAppmnt(codeAppmnt, docClient, date);
  }
}
  
