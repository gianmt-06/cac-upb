import Repository from "../../../../../shared/infrastructure/repository/Repository";
import Response from "../../../../shared/domain/model/APIResponse/Response";
import Appointment from "../../../domain/model/appointment/Appointment";
import NullAppointment from "../../../domain/model/appointment/NullAppointment";
import ValidateAppmntRepositoryPort from "../../../domain/port/driven/ValidateAppmnt/ValidatAppmntRepositoryPort";

export default class ValidateAppmntRepository implements ValidateAppmntRepositoryPort {
    constructor(private readonly appmntRepository: Repository<Response<Appointment>> ){}

    validate = async(code: string, docClient: string, date: string): Promise<Appointment> => {
        try {
            const respose = await this.appmntRepository.post("http://localhost:5001/appointment/validate", {code, docClient, date});
            const data = (respose as Response<Appointment>).data;
            return data;
        } catch (error) {
            return new NullAppointment();
        }
    }
}