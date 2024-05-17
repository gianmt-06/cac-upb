import AbstractPerson from "../../../../shared/domain/model/person/AbstractPerson";

interface clientType {
    id: string,
    description: string
}

export default abstract class AbstractClient extends AbstractPerson {
    protected idClient: string;
    protected typeClient: clientType
    protected birth: Date;

    constructor(
        name: string,
        lastname: string,
        docNumber: string,
        typeClient: clientType,
        birth: Date,
        idClient: string
    ) {
        super(
            name,
            lastname,
            docNumber
        );

        this.typeClient = typeClient;
        this.birth = birth;
        this.idClient = idClient
    }

    public abstract override isNull(): boolean;

    public getId(): string {
        return this.idClient;
    }

    public setId(id: string) {
        this.idClient = id;
    }

    public getType(): clientType {
        return this.typeClient;
    }

    public setType(type: clientType) {
        this.typeClient = type;
    }

    public getBirth(): Date {
        return this.birth;
    }

    public setBirth(birth: Date) {
        this.birth = birth;
    }
}