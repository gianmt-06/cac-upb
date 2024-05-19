
import AppmntDTO from '../../../domain/model/AppointmentDTO/AppmntDTO';
import ModifyAppmntServicePort from '../../../domain/port/driver/ModifyAppmnt/ModifyAppmntServicePort';
import ModifyAppmntUseCasePort from '../../../domain/port/driver/ModifyAppmnt/ModifyAppmntUseCasePort'

export default class ModifyAppmntUseCase implements ModifyAppmntUseCasePort {
  constructor(private readonly modifyAppmntService: ModifyAppmntServicePort) {
  }
  modifyAppmt(code: string, partialAppmnt: AppmntDTO): Promise<boolean> {
    return this.modifyAppmntService.modifyAppmt(code, partialAppmnt);
  }
}
  
