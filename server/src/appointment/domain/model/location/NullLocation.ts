import AbstractLocation from "./AbstractLocation";

export default class NullLocation extends AbstractLocation {
    constructor(){
        super(
            'not found city in database',
            'not found name in database',
            'not found address in database'
        )
    }

    public isNull(): boolean {
        return true
    }
}