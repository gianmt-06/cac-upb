import AbstractAppmntType from "./AbstractAppmntType";

export default class NullAppmntType extends AbstractAppmntType{
    constructor(){
        super(
            'no id in database',
            'no description in database'
        )
    }
}