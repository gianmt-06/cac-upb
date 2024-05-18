import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export default interface ModifyAppmntRepositoryPort {
  modifyAppmt(id: string, partialAppmnt: AppmntDTO): Promise<boolean>
}