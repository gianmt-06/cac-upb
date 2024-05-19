import Component from "../../../../../util/component/Component.js";
import View from "../../../../../util/view/View.js";
import NavbarComponent from "../../../shared/components/navbar/NavbarComponent.js";
import { getTemplate } from "./template/LoginTemplate.js";

export default class LoginView extends View {
    private components: Component[];;

    constructor(parent: HTMLElement){
        super(parent, getTemplate())
        this.components = [];
    }

    public render = async(): Promise<void> => {
        console.log('iniciando');
            
        this.load();
        this.loadComponents();
    }

    public loadComponents = (): void => {
        this.components.push(new NavbarComponent(document.querySelector('#navbar') as HTMLDivElement))
        this.components.forEach((component: Component) => component.deploy())
    }
}