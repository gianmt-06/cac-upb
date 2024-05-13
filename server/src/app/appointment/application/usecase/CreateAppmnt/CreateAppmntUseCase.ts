
import Appointment from '../../../domain/model/appointment/Appointment'
import CreateAppmntServicePort from '../../../domain/port/driver/CreateAppmnt/CreateAppmntServicePort'
import CreateAppmntUseCasePort from '../../../domain/port/driver/CreateAppmnt/CreateAppmntUseCasePort'

export default class CreateAppmntUseCase implements CreateAppmntUseCasePort {
  name: string

  constructor(
    private readonly createAppmntService: CreateAppmntServicePort
  ) {
    this.name = 'CreateAppmntUseCase'
  }

  public createAppmnt = async (appointment: Appointment): Promise<boolean> => {
    return await this.createAppmntService.createAppmnt(appointment);
  }
}
  
