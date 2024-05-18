import Repository from "../../../../../shared/infrastructure/repository/Repository";
import AppmntDTO from "../../../domain/model/AppointmentDTO/AppmntDTO";
import CreateAppmntRepositoryPort from "../../../domain/port/driven/CreateAppmnt/CreateAppmntRepositoryPort";

export default class CreateAppmntRepository implements CreateAppmntRepositoryPort {
    constructor(private readonly appmntRepostory: Repository<AppmntDTO>){}

    createAppmnt = async (appmnt: AppmntDTO): Promise<boolean> => {
        try {
            await this.appmntRepostory.post('http://localhost:5000/appointment/create', appmnt);
            return true;
        } catch (error) {
            return false;
        }
    }

}