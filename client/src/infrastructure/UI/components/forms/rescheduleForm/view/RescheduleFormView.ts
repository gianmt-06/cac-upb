import View from "../../../../../../util/view/View.js";
import { formatDate } from "../util/FormatDate.js";
import { getRescheduleForm } from "./template/RescheduleFormTemplate.js";

export default class RescheduleFormView extends View {
    constructor(parent: HTMLElement){
        super(parent, getRescheduleForm())
    }
    
    public render = async (): Promise<void> => {
        this.load()    
    }

    setFormAction(action: Function){
        document.getElementById('simple-form')?.addEventListener('submit', event => {
            event.preventDefault();
            // const docNumberInput = document.getElementById('simple-form') as HTMLInputElement;

            // action().then(value => {

            // })
        })
        console.log(action);
    }

    public setValidateAction(action: Function, loadHandler: Function){
        document.getElementById('simple-form')?.addEventListener('submit', event => {
            event.preventDefault();
            const codeAppmnt = (document.getElementById('appointmentCode') as HTMLInputElement).value
            const docNumber = (document.getElementById('docNumber') as HTMLInputElement).value
            const date = formatDate((document.getElementById('date') as HTMLInputElement).value);
            action(codeAppmnt, docNumber, date).then((value: any) => {
                console.log('ya no hay error');
                console.log(value);
                
            }).catch((error: any) => {
                console.log('error');
                loadHandler(error);
            })
        })      
    }
}