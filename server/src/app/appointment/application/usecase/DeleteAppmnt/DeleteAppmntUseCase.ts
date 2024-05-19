
import DeleteAppmntServicePort from '../../../domain/port/driver/DeleteAppmnt/DeleteAppmntServicePort';
import DeleteAppmntUseCasePort from '../../../domain/port/driver/DeleteAppmnt/DeleteAppmntUseCasePort'

export default class DeleteAppmntUseCase implements DeleteAppmntUseCasePort {
  constructor(private readonly deleteAppmntService: DeleteAppmntServicePort){}

  deleteAppmnt = async(code: string): Promise<boolean> => {
    return this.deleteAppmntService.deleteAppmnt(code);
  }
}
  
