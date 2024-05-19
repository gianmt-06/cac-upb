import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface CreateAppmntRepositoryPort {
  createAppmnt(clientdoc: string, appmnt: AppmntDTO): Promise<boolean>
}
  
