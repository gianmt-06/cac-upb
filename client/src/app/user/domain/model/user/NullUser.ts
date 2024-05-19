import NullLocation from "../../../../location/domain/model/location/NullLocation";
import AbstractUser from "./AbstractUser";

export default class NullUser extends AbstractUser {
    constructor() {
        super(
            'not found id in database',
            'not found rol in database',
            'not found name in database',
            'not found lastname in database',
            'not found document number in database',
            'not found doctype in database',
            'not found email in database',
            new NullLocation()
        )
    }

    public isNull(): boolean {
        return true
    }
}