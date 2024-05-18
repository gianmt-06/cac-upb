
import GetNextTicketServicePort from '../../../domain/port/driver/GetNextTicket/GetNextTicketServicePort'

export default class GetNextTicketService implements GetNextTicketServicePort {
  name: string

  constructor() {
    this.name = 'GetNextTicketService'
  }

  public execute = async (): Promise<string> => {
    return 'Hello from GetNextTicketService'
  }
}
  
