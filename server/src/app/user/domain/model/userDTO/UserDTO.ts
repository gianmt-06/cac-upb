export default interface UserDTO {
    uid: string,
    rolid: string, 
    docnumber: string,
    locationid: string,
    name: string,
    lastname: string,
    email: string,
    password?: string
    status?: string
}