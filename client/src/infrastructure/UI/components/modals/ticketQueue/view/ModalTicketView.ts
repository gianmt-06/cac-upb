import View from "../../../../../../util/view/View.js";
import { getModalTicket } from "./template/ModalTicketTemplate.js";

export default class TicketQueueView extends View {
    constructor(parent: HTMLElement){
        super(parent, getModalTicket())
    }
    
    public render = async (): Promise<void> => {
        await this.load();
    }
}