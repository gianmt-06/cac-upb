import Appointment from "../../../model/appointment/Appointment";

export default interface ValidateAppmntServicePort {
    validate(code: string, docClient: string, date: string): Promise<Appointment>
}