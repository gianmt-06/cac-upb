export default interface UserDTO {
    uid: string,
    rolId: string, 
    docnumber: string,
    idlocation: string,
    name: string,
    lastname: string,
    email: string,
    password?: string
    status?: string
}