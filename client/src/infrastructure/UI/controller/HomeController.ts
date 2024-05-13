import ControllerInterface from "../../../types/ControllerInterface";
import HomeView from "../view/HomeView";

export default class HomeController implements ControllerInterface{

    constructor (
        private readonly view: HomeView,
    ) {
    }

    start(){
        this.view.deploy();
    }
}