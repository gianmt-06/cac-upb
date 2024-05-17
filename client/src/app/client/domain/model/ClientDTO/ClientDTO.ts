export default interface ClientDTO {
    client: Client
}

interface Client {
    idClient: string,
    idtype: string,
    descriptiontype?: string,
    docNumber: string,
    name: string,
    lastname: string,
    birth: string
}