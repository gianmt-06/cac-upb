export default class CancelAppmtView {
    getTemplate() {
        return `
        <div class="cancel-page page-content">
            <h1 class="ag-cita-title page-title">Reagenda tu cita</h1>
            <form class="cancel-cita-form needs-validation" novalidate>
                <div class="row">
                    <div class="input-container col">
                        <label for="appointmentCode" class="input-label">Codigo Cita</label>
                        <input type="text" class="form-control" id="appointmentCode" required>
                        <div class="invalid-feedback">Campo requerido</div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="input-container col">
                        <label for="documentType" class="input-label">Tipo documento</label>
                        <select class="form-select" id="documentType" required>
                            <option selected disabled value="">Tipo de documento</option>
                            <option>...</option>
                        </select>
                        <div class="invalid-feedback">Campo requerido</div>
                    </div>
                </div>

                <div class="row">
                    <div class="input-container col">
                        <label for="docNumber" class="input-label">Identificacion</label>
                        <input type="text" class="form-control" id="docNumber" required>
                        <div class="invalid-feedback">Campo requerido</div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="input-container col">
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
                    
                </div>
                <div class="row button-container">
                    <button type="submit" class="btn btn-outline-dark agendar-button" id="submitButton">Agendar</button>
                </div>
               
            <form/>
        </div>
        `;
    }
}
