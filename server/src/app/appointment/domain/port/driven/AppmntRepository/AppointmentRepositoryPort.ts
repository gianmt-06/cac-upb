import Repository from "../../../../../shared/infrastructure/repository/Repository";
import AppmntDTO from "../../../model/AppointmentDTO/AppmntDTO";

export interface AppmntRepositoryPort extends Repository<AppmntDTO, string> {
    getByCode: (codeAppmnt: string) => Promise<AppmntDTO>
}