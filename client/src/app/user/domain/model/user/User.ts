import AbstractUser from "./AbstractUser";

export default class User extends AbstractUser {
    public isNull(): boolean {
        return false    
    }
}