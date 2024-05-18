import Repository from "../../../../shared/infrastructure/repository/Repository";
import AppmntDTO from "../../../domain/model/AppointmentDTO/AppmntDTO"
import CreateAppmntRepositoryPort from "../../../domain/port/driven/CreateAppmnt/CreateAppmntRepositoryPort"

export default class CreateAppmntRepository implements CreateAppmntRepositoryPort {
  constructor(private readonly appmntRepository: Repository<AppmntDTO, string>) {}

  createAppmnt(appmnt: AppmntDTO): Promise<boolean> {
    return this.appmntRepository.save(appmnt);
  }
}
  
