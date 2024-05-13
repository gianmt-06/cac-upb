
import Appointment from '../../../domain/model/appointment/Appointment'
import CreateAppmntPort from '../../../domain/port/driven/CreateAppmntPort'
import CreateAppmntServicePort from '../../../domain/port/driver/CreateAppmnt/CreateAppmntServicePort'

export default class CreateAppmntService implements CreateAppmntServicePort {
  name: string

  constructor(
    private readonly createAppointment: CreateAppmntPort
  ) {
    this.name = 'CreateAppmntService'
  }

  public createAppmnt = async (appointment: Appointment): Promise<boolean> => {
    console.log('peticion');
    
    console.log(appointment);
    
    return await this.createAppointment.create();
  }
}
  
