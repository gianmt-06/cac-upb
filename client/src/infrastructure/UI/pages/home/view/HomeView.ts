import Component from "../../../../../util/component/Component.js";
import View from "../../../../../util/view/View.js";
import NavbarComponent from "../../../shared/components/navbar/NavbarComponent.js";
import { getTemplate } from "./template/HomeTemplate.js";

export default class HomeView extends View {
    private components: Component[];

    constructor(parent: HTMLElement){
        super(parent, getTemplate())
        this.components = [];
    }

    public render = async(): Promise<void> => {
        this.load()
        this.components.push(new NavbarComponent(document.querySelector('#navbar') as HTMLDivElement))
        this.components.forEach((component: Component) => component.deploy())
    }
}