import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface CreateAppmntUseCasePort {
  createAppmnt(appointment: AppmntDTO): Promise<boolean>
}
  
