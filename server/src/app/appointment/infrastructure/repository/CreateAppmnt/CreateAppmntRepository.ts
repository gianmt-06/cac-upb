import AppmntDTO from "../../../domain/model/AppointmentDTO/AppmntDTO"
import { AppmntRepositoryPort } from "../../../domain/port/driven/AppmntRepository/AppointmentRepositoryPort"
import CreateAppmntRepositoryPort from "../../../domain/port/driven/CreateAppmnt/CreateAppmntRepositoryPort"

export default class CreateAppmntRepository implements CreateAppmntRepositoryPort {
  constructor(private readonly appmntRepository: AppmntRepositoryPort) {}

  createAppmnt(appmnt: AppmntDTO): Promise<boolean> {
    return this.appmntRepository.save(appmnt);
  }
}
  
