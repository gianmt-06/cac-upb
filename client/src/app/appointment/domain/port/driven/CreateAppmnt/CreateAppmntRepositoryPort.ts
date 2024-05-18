import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface CreateAppmntRepositoryPort {
  createAppmnt(appmnt: AppmntDTO): Promise<boolean>
}
  
