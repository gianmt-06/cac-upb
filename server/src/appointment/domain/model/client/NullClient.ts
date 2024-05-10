import AbstractClient from "./AbstractClient";

export default class NullClient extends AbstractClient {
    constructor(){
        super(
            'not found name in database',
            'not found lastname in database',
            'not found document number in database',
            'not found type in database',
            new Date(),
            'not found id in database'
        );
    }

    public isNull(): boolean {
        return false    
    }
}