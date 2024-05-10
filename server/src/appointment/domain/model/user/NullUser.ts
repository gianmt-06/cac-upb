import AbstractPerson from "../person/AbstractPerson";

export default class NullUser extends AbstractPerson {
    private idUser!: string;
    private email: string;
    private password: string;
    private rol: string;

    constructor() {
        super(
            'not found name in database',
            'not found lastname in database',
            'not found document number in database',
        )
        this.idUser = 'not found id in database'
        this.email = 'not found email in database';
        this.password = 'not found password in database';
        this.rol = 'not found rol in database';
    }

    public isNull(): boolean {
        return true
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