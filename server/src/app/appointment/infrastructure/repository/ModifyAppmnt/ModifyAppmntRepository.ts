
import AppmntDTO from '../../../domain/model/AppointmentDTO/AppmntDTO';
import { AppmntRepositoryPort } from '../../../domain/port/driven/AppmntRepository/AppointmentRepositoryPort';
import ModifyAppmntRepositoryPort from '../../../domain/port/driven/ModifyAppmnt/ModifyAppmntRepositoryPort'

export default class ModifyAppmntRepository implements ModifyAppmntRepositoryPort {
  constructor(private readonly AppmntRepository: AppmntRepositoryPort){}

  modifyAppmt = async(code: string, partialAppmnt: AppmntDTO): Promise<boolean> => {
    return await this.AppmntRepository.update(code, partialAppmnt);
  }
}
  
