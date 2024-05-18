import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface ModifyAppmntUseCasePort {
  modifyAppmt(id: string, partialAppmnt: AppmntDTO): Promise<boolean>
}
  
