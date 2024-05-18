import Repository from "../../../../../shared/infrastructure/repository/Repository";
import UserDTO from "../../../model/userDTO/UserDTO";

export interface UserRepositoryPort extends Repository<UserDTO, string> {
    getCredentials: (email: string) => Promise<{uid: string, hashPassword: string}>;
    
    changeStatus: (id: string) => Promise<boolean>;
    changePassword: (id: string, newPassword: string) => Promise<boolean>;
    
    getRoles: () => void;
}