export default interface ClientDTO {
    name: string,
    lastname: string,
    docType: string,
    docNumber: string,
    idClient: string,
    typeClient: {id: string, description: string},
    birth: string
}