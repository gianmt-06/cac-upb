
import ModalManagerInterface from "../types/ModalManagerInterface.js";
import FullFormComponent from "../components/FullFormComponent.js";

import ModalManager from "./ModalManager.js";

import View from "./View.js";

export default class AppointmentView extends View {

    private formComponent = new FullFormComponent();
    private dialogManager: ModalManagerInterface;

    constructor() {
        super()
        this.dialogManager = new ModalManager()
    }

    public deploy(){
        this.loadView(this.getTemplate());
        this.dialogManager.notify('ticket');
        this.formComponent.setAction(this.showTicket)
    }

    public showTicket(){
        (document.getElementById('modal-btn') as HTMLButtonElement).click();
    }

    private getTemplate() {
        return `
            ${this.formComponent.getTemplate()}
        `
    }
}