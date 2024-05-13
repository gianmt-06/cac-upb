import ModifyAppmtModel from "../../../domain/model/ModifyAppmtModel";
import ModifyAppmtView from "../view/ModifyAppmtView";
import ControllerInterface from "../../../types/ControllerInterface";


export default class ModifyAppmtController implements ControllerInterface{

    constructor (
        private readonly view: ModifyAppmtView,
        private readonly model: ModifyAppmtModel
    ) {
        console.log(this.model);
    }

    start(){
        this.view.deploy();
    }
}