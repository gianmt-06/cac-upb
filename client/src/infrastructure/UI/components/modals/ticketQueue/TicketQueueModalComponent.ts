import Component from "../../../../../util/component/Component.js";
import TicketQueueController from "./controller/TicketQueueModalComponent.js";
import TicketQueueView from "./view/ModalTicketView.js";

export default class TicketQueueComponent implements Component {
    private readonly modalTicketController: TicketQueueController;

    constructor(parent: HTMLElement){
        this.modalTicketController = new TicketQueueController(new TicketQueueView(parent));;
    }

    public deploy = (): void => {
        this.modalTicketController.init()
    }
}