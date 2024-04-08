import View from "./View";
import SimpleFormTemplate from "../components/SimpleForm";
export default class ModifyAppmtView extends View {
    constructor() {
        super();
        this.simpleFormComponent = new SimpleFormTemplate();
    }
    deploy() {
        this.loadView(this.getTemplate());
    }
    getTemplate() {
        return `
        <div class="cancel-page page-content">
            <h1 class="ag-cita-title page-title">Reagenda tu cita</h1>
            ${this.simpleFormComponent.getTemplate()}
        </div>
        `;
    }
}
