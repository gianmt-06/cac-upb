import Repository from "../../../../../shared/infrastructure/repository/Repository";
import AppmntTypeDTO from "../../../model/AppointmentDTO/AppmntTypeDTO";

export interface AppmntTypeRepositoryPort extends Repository<AppmntTypeDTO, string> {}