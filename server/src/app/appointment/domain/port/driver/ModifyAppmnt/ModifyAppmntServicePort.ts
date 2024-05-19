import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface ModifyAppmntServicePort {
  modifyAppmt(code: string, partialAppmnt: AppmntDTO): Promise<boolean>
}
  
