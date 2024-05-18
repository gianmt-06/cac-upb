
import DeleteAppmntRepositoryPort from '../../../domain/port/driven/DeleteAppmnt/DeleteAppmntRepositoryPort'
import DeleteAppmntServicePort from '../../../domain/port/driver/DeleteAppmnt/DeleteAppmntServicePort'

export default class DeleteAppmntService implements DeleteAppmntServicePort {
  constructor(private readonly deleteAppmntRepository: DeleteAppmntRepositoryPort){}

  deleteAppmnt = async(id: string): Promise<boolean> => {
    return await this.deleteAppmntRepository.deleteAppmnt(id);
  }
}