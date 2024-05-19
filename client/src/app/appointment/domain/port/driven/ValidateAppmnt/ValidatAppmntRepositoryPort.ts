import Appointment from "../../../model/appointment/Appointment";

export default interface ValidateAppmntRepositoryPort {
    validate(code: string, docClient: string, date: string): Promise<Appointment>
}