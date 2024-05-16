import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface CreateAppmntServicePort {
  createAppmnt(appointment: AppmntDTO): Promise<boolean>
}
  
