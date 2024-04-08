import View from "./View";
import SimpleFormTemplate from "../components/SimpleForm";
import ModalManager from "./ModalManager";
export default class CancelAppmtView extends View {
    constructor() {
        super();
        this.simpleFormComponent = new SimpleFormTemplate();
        this.loadWarningModal = () => {
            document.getElementById('modal-btn').click();
        };
        this.dialogManager = new ModalManager();
    }
    deploy() {
        this.loadView(this.getTemplate());
        this.dialogManager.notify('warning');
        this.simpleFormComponent.setAction(this.loadWarningModal);
    }
    getTemplate() {
        return `
        <div class="cancel-page page-content">
            <h1 class="ag-cita-title page-title">Cancela tu cita</h1>
            ${this.simpleFormComponent.getTemplate()}
        </div>
        `;
    }
}
