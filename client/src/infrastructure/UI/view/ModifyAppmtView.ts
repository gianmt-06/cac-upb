import View from "./View";
import SimpleFormTemplate from "../components/SimpleForm";

export default class ModifyAppmtView extends View {

    private simpleFormComponent = new SimpleFormTemplate();

    constructor(){
        super()
    }

    public deploy(){
        this.loadView(this.getTemplate());
    }

    getTemplate() {
        return `
        <div class="cancel-page page-content">
            <h1 class="ag-cita-title page-title">Reagenda tu cita</h1>
            ${ this.simpleFormComponent.getTemplate() }
        </div>
        `
    }
}