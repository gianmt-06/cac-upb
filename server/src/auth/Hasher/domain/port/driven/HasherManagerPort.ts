export default interface HasherManagerPort {
    hashPassword(password: string): Promise<string>;
    comparePassword(plainPassword: string, hashPassword: string): Promise<boolean> 
}