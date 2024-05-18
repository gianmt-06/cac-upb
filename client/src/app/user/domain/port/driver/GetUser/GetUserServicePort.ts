import AbstractUser from "../../../model/user/AbstractUser";

export default interface GetUserServicePort {
  getUserById(id: string): Promise<AbstractUser>
}
  
