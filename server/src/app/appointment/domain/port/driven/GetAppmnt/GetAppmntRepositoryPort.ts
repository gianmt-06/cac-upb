import AbstractAppointment from "../../../model/appointment/AbstractAppointment";

export default interface GetAppmntRepositoryPort {
  getAppmnt(codeAppmnt: string, docClient: string, date: Date): Promise<AbstractAppointment>
}
  
