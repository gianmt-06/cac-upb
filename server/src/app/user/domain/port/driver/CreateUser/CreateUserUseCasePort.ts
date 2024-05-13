import UserDTO from "../../../model/userDTO/UserDTO";

export default interface CreateUserUseCasePort {
  createUser(user: UserDTO): Promise<boolean>
}
  
