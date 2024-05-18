import AbstractUser from "../../../model/user/AbstractUser";

export default interface GetUserRepositoryPort {
  getUserById(id: string): Promise<AbstractUser>
}
  
