import UserDTO from "../../../model/userDTO/UserDTO";

export default interface CreateUserRepositoryPort {
  createUser(user: UserDTO): Promise<boolean>
}