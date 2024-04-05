import FullFormComponent from "../components/FullFormComponent.js"
import View from "./View.js";

export default class AppointmentView extends View{

    private formComponent = new FullFormComponent('1.099.735.628', 'GianMarco');

    constructor() {
        super()
    }

    public deploy(){
        this.loadView(this.getTemplate());
        this.formComponent.defineAction(this.doSome)
    }

    public doSome(){
        console.log('HolaMundoaaaa');   
    }

    private getTemplate() {
        return `
            ${this.formComponent.getTemplate()}
        `
    }
}