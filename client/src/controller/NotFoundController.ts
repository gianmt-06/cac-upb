import ControllerInterface from "../types/ControllerInterface";
import NotFoundView from "../view/NotFoundView";

export default class NotFoundController implements ControllerInterface{

    constructor (
        private readonly view: NotFoundView,
    ) {
    }

    start(){
        this.view.deploy();
    }
}