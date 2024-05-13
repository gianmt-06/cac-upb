import AbstractPerson from "../../../../shared/domain/model/person/AbstractPerson";

export default abstract class AbstractClient extends AbstractPerson {
    protected idClient: string;
    protected typeClient: string;
    protected birth: Date;

    constructor(
        name: string, 
        lastname: string, 
        docNumber: string, 
        typeClient: string, 
        birth: Date,
        idClient: string
    ){
        super(
            name,
            lastname,
            docNumber
        );

        this.typeClient = typeClient;
        this.birth = birth;
        this.idClient = idClient
    }

    public abstract isNull(): boolean;

    public getId(): string {
        return this.idClient;
    }

    public setId(id: string) {
        this.idClient = id;
    }

    public getType(): string {
        return this.typeClient;
    }

    public setType(type: string) {
        this.typeClient = type;
    }

    public getBirth(): Date {
        return this.birth;
    }

    public setBirth(birth: Date) {
        this.birth = birth;
    }
}