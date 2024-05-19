import Appointment from "../../../../../../app/appointment/domain/model/appointment/Appointment.js";
import View from "../../../../../../util/view/View.js";
import formsValidator from "../../../../utils/formsValidator/FormsValidator.js";
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
        formsValidator(action);
    }

    public setValidateAction(validationFunction: Function, loadHandler: Function){
        document.getElementById('simple-form')?.addEventListener('submit', event => {
            event.preventDefault();
            const {code, document, date} = this.getFormData();

            validationFunction(code, document, date).then((value: any) => {
                console.log('ya no hay error');
                console.log(value);
                
            }).catch((error: any) => {
                console.log('error');
                loadHandler(error);
            })
        })      
    }

    public cancelAppmnt(validationFunction: Function, cancelAppmntFunction: Function){
        document.getElementById('simple-form')?.addEventListener('submit', event => {
            event.preventDefault();
            const {code, document, date} = this.getFormData();

            validationFunction(code, document, date).then((value: any) => {
                console.log('ya no hay error');
                console.log(value);
                
            }).catch((_error: Appointment) => {
                console.log('error');
                cancelAppmntFunction(code)
                console.log('Eliminado con exito');
                
            })
        })      
    }

    public getFormData = () => {
        const codeAppmnt = (document.getElementById('appointmentCode') as HTMLInputElement).value
        const docNumber = (document.getElementById('docNumber') as HTMLInputElement).value
        const date = formatDate((document.getElementById('date') as HTMLInputElement).value);
        return {
            code: codeAppmnt,
            document: docNumber,
            date: date
        }
    }
}