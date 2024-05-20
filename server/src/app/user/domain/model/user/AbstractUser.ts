import Location from "../../../../location/domain/model/location/Location";
import AbstractPerson from "../../../../shared/domain/model/person/AbstractPerson";

export default abstract class AbstractUser extends AbstractPerson {
    private email: string
    private rol: string
    private idUser: string
    private location: Location

    constructor(
        idUser: string,
        rol: string,
        name: string,
        lastname: string, 
        docNumber: string, 
        docType: string,
        email: string, 
        location: Location
    ){
        super(
            name,
            lastname,
            docType,
            docNumber
        );
        this.email = email;
        this.rol = rol;
        this.idUser = idUser;
        this. location = location
    }

    public abstract isNull(): boolean

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

    public getRol(): string {
        return this.rol;
    }

    public setRol(rol: string) {
        this.rol = rol;
    }

    public getLocation(): Location {
        return this.location;
    }

    public setLocation(location: Location) {
        this.location = location;
    }
}