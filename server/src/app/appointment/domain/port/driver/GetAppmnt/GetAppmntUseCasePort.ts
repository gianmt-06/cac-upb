import Appointment from "../../../model/appointment/Appointment";

export default interface GetAppmntUseCasePort {
  getAppmnt(codeAppmnt: string, docClient: string, date: Date): Promise<Appointment>
}
  
