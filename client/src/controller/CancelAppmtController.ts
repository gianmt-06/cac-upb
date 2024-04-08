import ControllerInterface from "../types/ControllerInterface";

import CancelAppmtModel from "../model/CancelAppmtModel";
import CancelAppmtView from "../view/CancelAppmtView";

export default class CancelAppmtController implements ControllerInterface{

    constructor (
        private readonly view: CancelAppmtView,
        private readonly model: CancelAppmtModel
    ) {
        console.log(this.model);
    }

    start(){
        this.view.deploy();
    }
}