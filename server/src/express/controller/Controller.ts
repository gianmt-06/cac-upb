import ResponseHandler from "../../helper/responseHandler/responseHandler";
import ResponseHandlerInterface from "../../helper/responseHandler/responseHandlerInterface";

export default class Controller {
    protected readonly responseHandler: ResponseHandlerInterface;
    
    constructor(){
        this.responseHandler = new ResponseHandler();
    }
}