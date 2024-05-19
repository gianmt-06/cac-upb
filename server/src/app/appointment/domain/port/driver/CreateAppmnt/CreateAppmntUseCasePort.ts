import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface CreateAppmntUseCasePort {
  createAppmnt(clientdoc: string, appointment: AppmntDTO): Promise<boolean>
}
  
