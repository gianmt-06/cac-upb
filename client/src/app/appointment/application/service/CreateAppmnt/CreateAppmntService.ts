import AppmntDTO from '../../../domain/model/AppointmentDTO/AppmntDTO'
import CreateAppmntRepositoryPort from '../../../domain/port/driven/CreateAppmnt/CreateAppmntRepositoryPort'
import CreateAppmntServicePort from '../../../domain/port/driver/CreateAppmnt/CreateAppmntServicePort'

export default class CreateAppmntService implements CreateAppmntServicePort {
  constructor(private readonly createAppointmentRepository: CreateAppmntRepositoryPort){}

  createAppmnt = async(appointment: AppmntDTO, clientdoc: string): Promise<boolean> => {
    return await this.createAppointmentRepository.createAppmnt(appointment, clientdoc)
  }
}
  
