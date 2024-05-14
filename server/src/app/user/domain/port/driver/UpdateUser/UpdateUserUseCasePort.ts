import UserDTO from "../../../model/userDTO/UserDTO";

export default interface UpdateUserUseCasePort {
  updateUser(id: string, partial: UserDTO): Promise<boolean>
}
  
