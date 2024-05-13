import AbstractUser from "../../../model/user/AbstractUser";

export default interface GetUserUseCasePort {
  getUserById(id: string): Promise<AbstractUser>
}
  
