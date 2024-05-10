import AbstractPerson from "../person/AbstractPerson";

export default class User extends AbstractPerson {
    private idUser!: string;
    private email: string;
    private password: string;
    private rol: string;

    constructor(name: string, lastname: string, docNumber: string, email: string, password: string, rol: string){
        super(
            name,
            lastname,
            docNumber
        );

        this.email = email;
        this.password = password;
        this.rol = rol;
    }

    public isNull(): boolean {
        return false
    }

    public getId(): string {
        return this.idUser;
    }

    public setId(id: string) {
        this.idUser = id;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string) {
        this.password = password;
    }

    public getRol(): string {
        return this.rol;
    }

    public setRol(rol: string) {
        this.rol = rol;
    }
}