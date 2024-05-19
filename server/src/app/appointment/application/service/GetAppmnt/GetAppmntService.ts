
import AbstractAppointment from '../../../domain/model/appointment/AbstractAppointment';
import GetAppmntRepositoryPort from '../../../domain/port/driven/GetAppmnt/GetAppmntRepositoryPort'
import GetAppmntServicePort from '../../../domain/port/driver/GetAppmnt/GetAppmntServicePort'

export default class GetAppmntService implements GetAppmntServicePort {
  constructor(private readonly getAppmntRepository: GetAppmntRepositoryPort) {}
  
  getAppmnt = async(codeAppmnt: string, docClient: string, date: Date): Promise<AbstractAppointment> => {
    return await this.getAppmntRepository.getAppmnt(codeAppmnt, docClient, date);
  }

  getAppmntById = async(id: string): Promise<AbstractAppointment> => {
    return await this.getAppmntRepository.getAppmntById(id);
  }
}
  
