
import Appointment from '../../../domain/model/appointment/Appointment'
import GetAppmntRepositoryPort from '../../../domain/port/driven/GetAppmnt/GetAppmntRepositoryPort'
import GetAppmntServicePort from '../../../domain/port/driver/GetAppmnt/GetAppmntServicePort'

export default class GetAppmntService implements GetAppmntServicePort {
  constructor(private readonly getAppmntRepository: GetAppmntRepositoryPort) {}

  getAppmnt = async(codeAppmnt: string, docClient: string, date: Date): Promise<Appointment> => {
    return await this.getAppmntRepository.getAppmnt(codeAppmnt, docClient, date);
  }
}
  
