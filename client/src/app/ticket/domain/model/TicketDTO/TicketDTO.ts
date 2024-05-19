export interface TicketDTO {
    code: string,
    priority: number,
    status: string,
    appmntid: string
}

export interface TicketResponse {
    code: string
    priority: number
    status: string
    appointment: Appointment
  }
  
  export interface Appointment {
    appmntType: AppmntType
    code: string
    description: string
    status: string
    date: string
    client: Client
    location: Location
  }
  
  export interface AppmntType {
    idType: string
    description: string
  }
  
  export interface Client {
    name: string
    lastname: string
    docType: string
    docNumber: string
    idClient: string
    typeClient: TypeClient
    birth: string
  }
  
  export interface TypeClient {
    id: string
    description: string
  }
  
  export interface Location {
    idLocation: string
    city: string
    state: string
    name: string
    address: string
  }
  