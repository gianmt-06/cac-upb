import View from "../../../../../../util/view/View.js";
import { getRescheduleForm } from "./template/RescheduleFormTemplate.js";

export default class RescheduleFormView extends View {
    constructor(parent: HTMLElement){
        super(parent, getRescheduleForm())
    }
    
    public render = async (): Promise<void> => {
        await this.load()    
    }
}