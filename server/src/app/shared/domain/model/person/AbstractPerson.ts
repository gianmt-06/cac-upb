export default abstract class AbstractPerson {
    private name: string;
    private lastname: string;
    private docType: string;
    private docNumber: string;

    constructor(name: string, lastname: string, docType: string, docNumber: string){
        this.name = name;
        this.lastname = lastname;
        this.docType = docType;
        this.docNumber = docNumber;
    }

    public abstract isNull(): boolean

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getLastname(): string{
        return this.lastname;
    }
    
    public setLastname(lastname: string) {
        this.lastname = lastname;
    }
    
    public getDocNumber(): string{
        return this.docNumber;
    }
    
    public setDocNumber(docNumber: string) {
        this.docNumber = docNumber;
    }

    public getDocType(): string{
        return this.docType;
    }
    
    public setDocType(docType: string) {
        this.docType = docType;
    }
}