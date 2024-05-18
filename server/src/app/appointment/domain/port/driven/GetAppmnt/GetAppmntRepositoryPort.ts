import Appointment from "../../../model/appointment/Appointment";

export default interface GetAppmntRepositoryPort {
  getAppmnt(codeAppmnt: string, docClient: string, date: Date): Promise<Appointment>
}
  
