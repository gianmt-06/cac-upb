import { AppmntRepositoryPort } from '../../../domain/port/driven/AppmntRepository/AppointmentRepositoryPort';
import DeleteAppmntRepositoryPort from '../../../domain/port/driven/DeleteAppmnt/DeleteAppmntRepositoryPort'

export default class DeleteAppmntRepository implements DeleteAppmntRepositoryPort {
  constructor(private readonly appmntRepository: AppmntRepositoryPort){}
  
  deleteAppmnt = async(code: string): Promise<boolean> => {
    return await this.appmntRepository.delete(code);
  }
}