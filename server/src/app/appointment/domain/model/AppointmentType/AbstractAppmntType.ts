export default class AbstractAppmntType {
    private idType: string;
    private description: string;
   
    constructor(idType: string, description: string){
        this.idType = idType;
        this.description = description;
    }

    public getIdType(): string {
        return this.idType;
    }

    public setIdType(value: string) {
        this.idType = value;
    }

    public getDescription(): string {
        return this.description;
    }
    public setDescription(value: string) {
        this.description = value;
    }
}