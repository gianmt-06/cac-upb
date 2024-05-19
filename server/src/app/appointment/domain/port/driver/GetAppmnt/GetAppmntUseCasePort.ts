import AbstractAppointment from "../../../model/appointment/AbstractAppointment";

export default interface GetAppmntUseCasePort {
  getAppmnt(codeAppmnt: string, docClient: string, date: Date): Promise<AbstractAppointment>
  getAppmntById(id: string): Promise<AbstractAppointment>
}
  
