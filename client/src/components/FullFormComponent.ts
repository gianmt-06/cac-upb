import formsValidator from "../helpers/FormsValidator";

export default class FullFormComponent {

    constructor(
        private documentt?: string,
        private name?: string,
    ){
    }

    setAction(action: Function){
        formsValidator(action);
    }

    getTemplate = () => {
        return `
        <div class="ag-cita-page page-content">
        <h1 class="ag-cita-title">Agenda tu cita</h1>
        <form class="ag-cita-form needs-validation" novalidate>
            <div class="row">
                <div class="input-container col-md-5">
                    <label for="documentType" class="input-label">Tipo documento</label>
                    <select class="form-select" id="documentType" required>
                        <option selected disabled value="">Tipo de documento</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-feedback">Campo requerido</div>
                </div>
                <div class="input-container col-md-7">
                    <label for="docNumber" class="input-label">Identificacion</label>
                    <input type="text" class="form-control" id="docNumber" required value=${this.documentt || ''}>
                    <div class="invalid-feedback">Campo requerido</div>
                </div>
            </div>
            <div class="row">
                <div class="input-container col">
                    <label for="userNames" class="input-label">Nombres</label>
                    <input type="text" class="form-control" id="userNames" required value=${this.name || ''}>
                    <div class="invalid-feedback">Campo requerido</div>
                </div>
                <div class="input-container col">
                    <label for="userLastNames" class="input-label">Apellidos</label>
                    <input type="text" class="form-control" id="userLastNames" required>
                    <div class="invalid-feedback">Campo requerido</div>
                </div>
            </div>
            <div class="row">
                <div class="input-container col">
                    <label for="stateName" class="input-label">Departamento</label>
                    <select class="form-select" id="stateName" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-feedback">Campo requerido</div>
                </div>
                <div class="input-container col">
                    <label for="cityName" class="input-label">Ciudad</label>
                    <select class="form-select" id="cityName" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-feedback">Campo requerido</div>
                </div>
                <div class="input-container col">
                    <label for="address" class="input-label">Direccion</label>
                    <input type="text" class="form-control" id="address" required>
                    <div class="invalid-feedback">Campo requerido</div>
                </div>
            </div>
            <div class="row">
                <div class="input-container col-md-4">
                    <label for="requestType" class="input-label">Tipo</label>
                    <select class="form-select" id="requestType" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-feedback">Campo requerido</div>
                </div>
                <div class="input-container col-md-4">
                    <label for="date" class="input-label">Fecha</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.125 1V2.875M12.875 1V2.875M1 14.125V4.75C1 4.25272 1.19754 3.77581 1.54917 3.42417C1.90081 3.07254 2.37772 2.875 2.875 2.875H14.125C14.6223 2.875 15.0992 3.07254 15.4508 3.42417C15.8025 3.77581 16 4.25272 16 4.75V14.125M1 14.125C1 14.6223 1.19754 15.0992 1.54917 15.4508C1.90081 15.8025 2.37772 16 2.875 16H14.125C14.6223 16 15.0992 15.8025 15.4508 15.4508C15.8025 15.0992 16 14.6223 16 14.125M1 14.125V7.875C1 7.37772 1.19754 6.90081 1.54917 6.54917C1.90081 6.19754 2.37772 6 2.875 6H14.125C14.6223 6 15.0992 6.19754 15.4508 6.54917C15.8025 6.90081 16 7.37772 16 7.875V14.125" stroke="#A5ADB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </span>
                        <input type="date" class="form-control" id="date"
                            aria-describedby="inputGroupPrepend" required>
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div class="input-container col-md-4">
                    <label for="hour" class="input-label">Hora</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 4V9H12.75M16.5 9C16.5 9.98491 16.306 10.9602 15.9291 11.8701C15.5522 12.7801 14.9997 13.6069 14.3033 14.3033C13.6069 14.9997 12.7801 15.5522 11.8701 15.9291C10.9602 16.306 9.98491 16.5 9 16.5C8.01509 16.5 7.03982 16.306 6.12987 15.9291C5.21993 15.5522 4.39314 14.9997 3.6967 14.3033C3.00026 13.6069 2.44781 12.7801 2.0709 11.8701C1.69399 10.9602 1.5 9.98491 1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5C10.9891 1.5 12.8968 2.29018 14.3033 3.6967C15.7098 5.10322 16.5 7.01088 16.5 9Z" stroke="#A5ADB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                                                      
                        </span>
                        <select class="form-select" id="hour" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="input-container col">
                    <label for="asignedPlace" class="input-label">Lugar asignado</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 8.75C12.5 9.41304 12.2366 10.0489 11.7678 10.5178C11.2989 10.9866 10.663 11.25 10 11.25C9.33696 11.25 8.70107 10.9866 8.23223 10.5178C7.76339 10.0489 7.5 9.41304 7.5 8.75C7.5 8.08696 7.76339 7.45107 8.23223 6.98223C8.70107 6.51339 9.33696 6.25 10 6.25C10.663 6.25 11.2989 6.51339 11.7678 6.98223C12.2366 7.45107 12.5 8.08696 12.5 8.75Z" stroke="#A5ADB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.25 8.75C16.25 14.7017 10 18.125 10 18.125C10 18.125 3.75 14.7017 3.75 8.75C3.75 7.0924 4.40848 5.50268 5.58058 4.33058C6.75268 3.15848 8.3424 2.5 10 2.5C11.6576 2.5 13.2473 3.15848 14.4194 4.33058C15.5915 5.50268 16.25 7.0924 16.25 8.75Z" stroke="#A5ADB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                  
                        </span>
                        <input type="text" class="form-control" id="asignedPlace"
                            aria-describedby="inputGroupPrepend" required>
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="input-container col">
                    <label for="requestDetails" class="input-label">Detalles</label>
                    <textarea class="form-control" id="requestDetails" required></textarea>
                    <div class="invalid-feedback">
                    Please enter a message in the textarea.
                    </div>
                </div>
            </div>
            <div class="row button-container">
                <button type="submit" class="btn btn-outline-dark agendar-button" id="submitButton" >Agendar</button>
            </div>
        </form>
    </div>
        `
    }   
}

