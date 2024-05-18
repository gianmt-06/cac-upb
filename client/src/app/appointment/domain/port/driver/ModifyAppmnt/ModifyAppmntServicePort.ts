import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface ModifyAppmntServicePort {
  modifyAppmt(id: string, partialAppmnt: AppmntDTO): Promise<boolean>
}
  
