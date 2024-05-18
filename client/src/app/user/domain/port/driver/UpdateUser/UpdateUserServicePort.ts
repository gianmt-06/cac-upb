import UserDTO from "../../../model/userDTO/UserDTO";

export default interface UpdateUserServicePort {
  updateUser(id: string, partial: UserDTO): Promise<boolean>
}
  
