import Appointment from "../../../model/appointment/Appointment";

export default interface ValidateAppmntUseCasePort {
    validate(code: string, docClient: string, date: string): Promise<Appointment>
}