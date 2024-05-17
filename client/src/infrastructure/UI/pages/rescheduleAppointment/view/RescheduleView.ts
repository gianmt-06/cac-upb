import Component from "../../../../../util/component/Component.js";
import View from "../../../../../util/view/View.js";
import RescheduleFormComponent from "../../../components/forms/rescheduleForm/RescheduleFromComponent.js";
import NavbarComponent from "../../../shared/components/navbar/NavbarComponent.js";
import { getTemplate } from "./template/RescheduleTemplate.js";

export default class RescheduleView extends View {
    private components: Component[];

    constructor(parent: HTMLElement){
        super(parent, getTemplate())
        this.components = [];
    }

    public render = async(): Promise<void> => {
        await this.load()
        this.components.push(new NavbarComponent(document.querySelector('#navbar') as HTMLDivElement));
        this.components.push(new RescheduleFormComponent(document.querySelector('#formContainer') as HTMLDivElement));
        this.components.forEach((component: Component) => component.deploy());
    }
}