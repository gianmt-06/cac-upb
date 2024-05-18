
import GetNextTicketRepositoryPort from '../../../domain/port/driven/GetNextTicket/GetNextTicketRepositoryPort'

export default class GetNextTicketRepository implements GetNextTicketRepositoryPort {
  name: string

  constructor() {
    this.name = 'GetNextTicketRepository'
  }

  public execute = async (): Promise<string> => {
    return 'Hello from GetNextTicketRepository'
  }
}
  
