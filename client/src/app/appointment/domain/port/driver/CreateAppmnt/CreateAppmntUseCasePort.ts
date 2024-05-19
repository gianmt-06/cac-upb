import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface CreateAppmntUseCasePort {
  createAppmnt(appmnt: AppmntDTO, clientdoc: string): Promise<boolean>
}
  
