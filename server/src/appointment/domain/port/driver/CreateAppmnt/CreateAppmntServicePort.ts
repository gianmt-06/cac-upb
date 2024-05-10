import Appointment from "../../../model/appointment/Appointment";

export default interface CreateAppmntServicePort {
  createAppmnt(appointment: Appointment): Promise<boolean>
}
  
