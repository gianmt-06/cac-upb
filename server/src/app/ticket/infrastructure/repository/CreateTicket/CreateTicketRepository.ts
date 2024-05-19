
import TicketDTO from '../../../domain/model/TicketDTO/TicketDTO'
import CreateTicketRepositoryPort from '../../../domain/port/driven/CreateTicket/CreateTicketRepositoryPort'
import { TicketRepositoryPort } from '../../../domain/port/driven/TicketRepository/TicketRepositoryPort'
import TicketAppmntProvider from '../GetNextTicket/provider/GetTicketAppointmentProvider'

export default class CreateTicketRepository implements CreateTicketRepositoryPort {
  constructor(private readonly ticketRepository: TicketRepositoryPort) {}

  createTicket = async(ticket: TicketDTO): Promise<boolean> => {
    const appmtProvider = new TicketAppmntProvider();
    const appmnt = await appmtProvider.getAppointment(ticket.codeappmnt);
    
    //const date = appmnt.getDate();
    const client = appmnt.getClient();
    const age = this.getAge(client.getBirth());
    const type =  client.getType().id;
  
    ticket.priority = this.getPriority(age, type);
  
    return await this.ticketRepository.save(ticket);
  }

  getAge(birth: Date){
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
  }

  getPriority(age: number, clientType: string){
    
    if(age > 60 && clientType == '1') {
      return 0;
    } else if (age > 60) {
      return 1;
    } else if (clientType == '1') {
      return 2
    }
    return 3;
  }
}
  
