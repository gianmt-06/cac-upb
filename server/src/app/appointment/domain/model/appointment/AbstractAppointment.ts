import Client from "../../../../client/domain/model/Client/Client";
import Location from "../../../../location/domain/model/location/Location";
import AbstractUser from "../../../../user/domain/model/user/AbstractUser";

export default abstract class AbstractAppointment {
    protected idAppmnt!: string;
    protected appmntType: string;
    protected code: string;
    protected description: string;
    protected status: string;
    protected date: Date;
    protected client: Client;
    protected User?: AbstractUser;
    protected location: Location;

    constructor(
        appmntType: string,
        code: string,
        description: string,
        status: string,
        date: Date,
        client: Client,
        location: Location
    ){
        this.appmntType = appmntType;
        this.code = code;
        this.description = description;
        this.status = status;
        this.date = date;
        this.client = client;
        this.location = location;
    }

    public abstract isNull(): boolean

    public getId(): string {
        return this.idAppmnt;
    }

    public setId(idAppmnt: string) {
        this.idAppmnt = idAppmnt;
    }

    public getType(): string {
        return this.appmntType
    }
    
    public setType(type: string) {
        this.appmntType = type;
    }

    public getCode(): string {
        return this.code
    }
    
    public setCode(code: string) {
        this.code = code;
    }

    public getDescription(): string {
        return this.description
    }
    
    public setDescription(description: string) {
        this.description = description;
    }

    public getStatus(): string {
        return this.status
    }
    
    public setStatus(status: string) {
        this.status = status;
    }

    public getDate(): Date {
        return this.date
    }
    
    public setDate(date: Date) {
        this.date = date;
    }

    public getClient(): Client {
        return this.client
    }
    
    public setClient(client: Client) {
        this.client = client;
    }

    // public getUser(): User {
    //     return this.User
    // }
    
    public setUser(user: AbstractUser) {
        this.User = user;
    }

    public getLocation(): Location {
        return this.location
    }
    
    public setLocation(location: Location) {
        this.location = location;
    }
}
