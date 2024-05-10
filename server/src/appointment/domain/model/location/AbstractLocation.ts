
export default abstract class AbstractLocation {
    private idLocation!: string;
    private city: string;
    private name: string;
    private address: string;

    constructor(city: string, name: string, address: string){
        this.city = city;
        this.name = name;
        this.address = address;
    }

    public abstract isNull(): boolean

    public getId(): string {
        return this.idLocation;
    }

    public setId(id: string) {
        this.idLocation = id;
    }

    public getCity(): string {
        return this.city
    }

    public setCity(city: string) {
        this.city = city;
    }
 
    public getName(): string {
        return this.name
    }

    public setName(name: string) {
        this.name = name;
    }
 

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string) {
        this.address = address;
    }
}