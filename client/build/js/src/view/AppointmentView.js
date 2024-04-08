import FullFormComponent from "../components/FullFormComponent.js";
import ModalManager from "./ModalManager.js";
import View from "./View.js";
export default class AppointmentView extends View {
    constructor() {
        super();
        this.formComponent = new FullFormComponent();
        this.dialogManager = new ModalManager();
    }
    deploy() {
        this.loadView(this.getTemplate());
        this.dialogManager.notify('ticket');
        this.formComponent.setAction(this.showTicket);
    }
    showTicket() {
        document.getElementById('modal-btn').click();
    }
    getTemplate() {
        return `
            ${this.formComponent.getTemplate()}
        `;
    }
}
