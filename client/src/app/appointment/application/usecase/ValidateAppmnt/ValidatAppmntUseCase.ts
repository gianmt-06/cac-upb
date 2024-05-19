import Appointment from "../../../domain/model/appointment/Appointment";
import ValidateAppmntServicePort from "../../../domain/port/driver/ValidateAppmnt/ValidatAppmntServicePort";
import ValidateAppmntUseCasePort from "../../../domain/port/driver/ValidateAppmnt/ValidatAppmntUseCasePort";

export default class ValidateAppmntUseCase implements ValidateAppmntUseCasePort {
    constructor(private readonly validateAppmntService: ValidateAppmntServicePort){}

    validate = async(code: string, docClient: string, date: string): Promise<Appointment> => {
        throw await this.validateAppmntService.validate(code, docClient, date);
    }
}