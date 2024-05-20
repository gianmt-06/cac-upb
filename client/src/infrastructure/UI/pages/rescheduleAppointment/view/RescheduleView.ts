import Appointment from "../../../../../app/appointment/domain/model/appointment/Appointment.js";
import Component from "../../../../../util/component/Component.js";
import View from "../../../../../util/view/View.js";
import RescheduleFormComponent from "../../../components/forms/rescheduleForm/RescheduleFromComponent.js";
import ScheduleFormComponent from "../../../components/forms/scheduleForm/ScheduleFromComponent.js";
import NavbarComponent from "../../../shared/components/navbar/NavbarComponent.js";
import { getTemplate } from "./template/RescheduleTemplate.js";

export default class RescheduleView extends View {
    private components: Component[];

    private reScheduleForm!: RescheduleFormComponent;
    private scheduleForm!: ScheduleFormComponent;
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
        this.reScheduleForm.setValidateAction(action, loadHandler)
    }

    public loadScheduleForm = (data: Appointment) => {
        const container  = document.querySelector('#app') as HTMLDivElement
        if(container) container.innerHTML = '';

        this.scheduleForm = new ScheduleFormComponent(container);
        this.scheduleForm.setDefaultData(data);
        this.scheduleForm.deploy()
    }

    public setActionsScheduleForm = (getLocations: Function, getAppmntTypes: Function) => {
        this.scheduleForm.getLocations(getLocations);
        this.scheduleForm.getAppmntTypes(getAppmntTypes);
    }
}