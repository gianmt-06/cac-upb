import Component from "../../../../../util/component/Component.js";
import ModalTicketController from "./controller/ModalTicketController.js";
import ModalTicketView from "./view/ModalTicketView.js";

export default class ModalTicketComponent implements Component {
    private readonly modalTicketController: ModalTicketController;

    constructor(parent: HTMLElement){
        this.modalTicketController = new ModalTicketController(new ModalTicketView(parent));;
    }

    public deploy = (): void => {
        this.modalTicketController.init()
    }
}