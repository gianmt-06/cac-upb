import Appointment from "../../../model/appointment/Appointment";

export default interface CreateAppmntUseCasePort {
  createAppmnt(appointment: Appointment): Promise<boolean>
}
  
