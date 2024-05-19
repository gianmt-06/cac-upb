import Repository from "../../../../shared/infrastructure/repository/Repository";
import AppmntDTO from "../../../domain/model/AppointmentDTO/AppmntDTO"
import CreateAppmntRepositoryPort from "../../../domain/port/driven/CreateAppmnt/CreateAppmntRepositoryPort"
import ClientAppmntProvider from "../GetAppmnt/provider/ClientAppmntProvider";

export default class CreateAppmntRepository implements CreateAppmntRepositoryPort {
  constructor(private readonly appmntRepository: Repository<AppmntDTO, string>) {}

  createAppmnt = async (clientdoc:string, appmnt: AppmntDTO): Promise<boolean> => {
    const { nanoid } = await import('nanoid');
    const clientProvider = new ClientAppmntProvider();
    
    appmnt.clientid = (await clientProvider.getClient(clientdoc)).getId();
    appmnt.code = nanoid(10);

    return await this.appmntRepository.save(appmnt);
  }
}
  
