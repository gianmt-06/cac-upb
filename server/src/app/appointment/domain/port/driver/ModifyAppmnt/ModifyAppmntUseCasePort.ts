import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface ModifyAppmntUseCasePort {
  modifyAppmt(code: string, partialAppmnt: AppmntDTO): Promise<boolean>
}
  
