import Appointment from "../../../model/appointment/Appointment";

export default interface GetAppmntServicePort {
  getAppmnt(codeAppmnt: string, docClient: string, date: Date): Promise<Appointment>
}
  
