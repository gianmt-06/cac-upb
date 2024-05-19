import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface CreateAppmntServicePort {
  createAppmnt(clietdoc:string, appointment: AppmntDTO): Promise<boolean>
}
  
