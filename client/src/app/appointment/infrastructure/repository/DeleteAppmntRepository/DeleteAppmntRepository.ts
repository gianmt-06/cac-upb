import Repository from "../../../../../shared/infrastructure/repository/Repository";
import Response from "../../../../shared/domain/model/APIResponse/Response";
import AppmntDTO from "../../../domain/model/AppointmentDTO/AppmntDTO";
import DeleteAppmntRepositoryPort from "../../../domain/port/driven/DeleteAppmnt/DeleteAppmntRepositoryPort";

export default class DeleteAppmntRepository implements DeleteAppmntRepositoryPort {
    constructor(private readonly appmntRepository: Repository<Response<AppmntDTO>> ){}

    deleteAppmnt = async(code: string): Promise<boolean> => {
        try {
            const respose = await this.appmntRepository.delete(`http://localhost:5001/appointment/cancel/${code}`);
            return respose.error;
        } catch (error) {
            return false;
        }
    }
}