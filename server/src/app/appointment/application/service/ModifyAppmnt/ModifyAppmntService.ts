
import AppmntDTO from '../../../domain/model/AppointmentDTO/AppmntDTO';
import ModifyAppmntRepositoryPort from '../../../domain/port/driven/ModifyAppmnt/ModifyAppmntRepositoryPort';
import ModifyAppmntServicePort from '../../../domain/port/driver/ModifyAppmnt/ModifyAppmntServicePort'

export default class ModifyAppmntService implements ModifyAppmntServicePort {
  constructor(private readonly modifyAppmntRepository: ModifyAppmntRepositoryPort) {}

  modifyAppmt(code: string, partialAppmnt: AppmntDTO): Promise<boolean> {
    return this.modifyAppmntRepository.modifyAppmt(code, partialAppmnt)
  }
}
  
