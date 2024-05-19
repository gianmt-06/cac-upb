import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface ModifyAppmntRepositoryPort {
  modifyAppmt(code: string, partialAppmnt: AppmntDTO): Promise<boolean>
}