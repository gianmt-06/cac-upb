import Appointment from "../../../domain/model/appointment/Appointment";
import ValidateAppmntRepositoryPort from "../../../domain/port/driven/ValidateAppmnt/ValidatAppmntRepositoryPort";
import ValidateAppmntServicePort from "../../../domain/port/driver/ValidateAppmnt/ValidatAppmntServicePort";

export default class ValidateAppmntService implements ValidateAppmntServicePort {
    constructor(private readonly validateAppmntRepository: ValidateAppmntRepositoryPort){}

    validate = async(code: string, docClient: string, date: string): Promise<Appointment> => {
        throw await this.validateAppmntRepository.validate(code, docClient, date);
    }
}