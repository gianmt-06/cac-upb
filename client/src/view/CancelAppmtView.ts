import View from "./View";
import SimpleFormTemplate from "../components/SimpleForm";
import ModalManagerInterface from "../types/ModalManagerInterface";

import ModalManager from "./ModalManager";

export default class CancelAppmtView extends View {

    private simpleFormComponent = new SimpleFormTemplate();
    private dialogManager: ModalManagerInterface;

    constructor(){
        super()
        this.dialogManager = new ModalManager()
    }

    public deploy(){
        this.loadView(this.getTemplate());
        this.dialogManager.notify('warning');
        this.simpleFormComponent.setAction(this.loadWarningModal)
    }

    public loadWarningModal = () =>{
        (document.getElementById('modal-btn') as HTMLButtonElement).click();
    }

    getTemplate() {
        return `
        <div class="cancel-page page-content">
            <h1 class="ag-cita-title page-title">Cancela tu cita</h1>
            ${ this.simpleFormComponent.getTemplate() }
        </div>
        `
    }
}