import Client from "../../../../../../app/client/domain/model/Client/Client.js";
import View from "../../../../../../util/view/View.js";
import formsValidator from "../../../../utils/formsValidator/FormsValidator.js";
import { getScheduleForm } from "./template/ScheduleFormTemplate.js";

export default class ScheduleFormView extends View {
    constructor(parent: HTMLElement){
        super(parent, getScheduleForm())
    }
    
    public render = async (): Promise<void> => {
        await this.load();
    }

    setAction(action: Function){
        formsValidator(action);
    }

    clientFields(handler: Function){
        const docNumberInput = document.getElementById('docNumber') as HTMLInputElement;
        docNumberInput?.addEventListener('blur', () => {            
            handler(docNumberInput.value).then((value: Client) => {
                (document.getElementById('userNames') as HTMLInputElement).value = value.getName() ;
                (document.getElementById('userLastNames') as HTMLInputElement).value = value.getLastname();
            })
        })
    }
}