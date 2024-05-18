export default interface AppmntTypeDTO {
    ApponitmentTypes: AppmntTDTO[]
}

interface AppmntTDTO {
    idType: string,
    description: string
}