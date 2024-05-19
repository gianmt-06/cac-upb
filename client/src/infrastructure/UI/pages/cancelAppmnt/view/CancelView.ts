import Component from "../../../../../util/component/Component.js";
import View from "../../../../../util/view/View.js";
import RescheduleFormComponent from "../../../components/forms/rescheduleForm/RescheduleFromComponent.js";
import NavbarComponent from "../../../shared/components/navbar/NavbarComponent.js";
import { getTemplate } from "./template/CancelTemplate.js";

export default class CancelView extends View {
    private components: Component[];

    private reScheduleForm!: RescheduleFormComponent;
    private navbar!: NavbarComponent;

    constructor(parent: HTMLElement){
        super(parent, getTemplate())
        this.components = [];
    }

    public render = async(): Promise<void> => {
        this.load()
        this.loadComponents();
    }

    public loadComponents = (): void => {
        this.navbar = new NavbarComponent(document.querySelector('#navbar') as HTMLDivElement);
        this.reScheduleForm = new RescheduleFormComponent(document.querySelector('#formContainer') as HTMLDivElement);

        this.components.push(this.navbar);
        this.components.push(this.reScheduleForm);

        this.components.forEach((component: Component) => component.deploy());
    }

    public setValidateAction = (action: Function, loadHandler: Function) => {
        this.reScheduleForm.setCancelAction(action, loadHandler);
    }

    public loadScheduleForm = () => {
        console.log('cancelando');
    }
}