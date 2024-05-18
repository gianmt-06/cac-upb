
import AppmntDTO from '../../../domain/model/AppointmentDTO/AppmntDTO'
import CreateAppmntServicePort from '../../../domain/port/driver/CreateAppmnt/CreateAppmntServicePort'
import CreateAppmntUseCasePort from '../../../domain/port/driver/CreateAppmnt/CreateAppmntUseCasePort'

export default class CreateAppmntUseCase implements CreateAppmntUseCasePort {
  constructor(private readonly createAppmntService: CreateAppmntServicePort) {}

  createAppmnt = async(appointment: AppmntDTO): Promise<boolean> => {
    return await this.createAppmntService.createAppmnt(appointment);
  }
}
  
