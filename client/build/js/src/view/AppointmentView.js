import FullFormComponent from "../components/FullFormComponent.js";
import View from "./View.js";
export default class AppointmentView extends View {
    constructor() {
        super();
        this.formComponent = new FullFormComponent('1.099.735.628', 'GianMarco');
    }
    deploy() {
        this.loadView(this.getTemplate());
        this.formComponent.defineAction(this.doSome);
    }
    doSome() {
        console.log('HolaMundoaaaa');
    }
    getTemplate() {
        return `
            ${this.formComponent.getTemplate()}
        `;
    }
}
