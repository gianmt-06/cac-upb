import UserDTO from "../../../model/userDTO/UserDTO";

export default interface UpdateUserRepositoryPort {
  updateUser(id: string, partial: UserDTO): Promise<boolean>
}
  
