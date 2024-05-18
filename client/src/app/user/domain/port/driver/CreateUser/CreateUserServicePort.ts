import UserDTO from "../../../model/userDTO/UserDTO";

export default interface CreateUserServicePort {
  createUser(user: UserDTO): Promise<boolean>
}
  
