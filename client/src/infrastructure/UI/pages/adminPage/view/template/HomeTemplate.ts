export const getTemplate = () => {
    return `
        <div class="admin-page page-content">
            <div class=stadistics>
                <div class="asis">
                    <div class="info-loader">
                        <span class="loader-title">Asistencias</span>
                        <div class="right-container info-asis">
                            <span class="loader-percent">90</span>
                            <span class="loader-min">%</span>
                            <span class="loader-slash">/</span>
                            <span class="loader-min">450</span>
                        </div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" style="width: 25%"></div>
                    </div>
                </div>
                <div class="aus">
                    <div class="info-loader">
                        <span class="loader-title">Ausencias</span>
                        <div class="right-container info-aus">
                            <span class="loader-percent">90</span>
                            <span class="loader-min">%</span>
                            <span class="loader-slash">/</span>
                            <span class="loader-min">450</span>
                        </div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-danger" style="width: 100%"></div>
                    </div>
                </div>
            </div>
            <div class="table-container">
                <div class="table-options">
                    <h2>Reporte Citas</h2>
                    <div class="status-filter">
                        <a>Todas</a>
                        <a>Asistidas</a>
                        <a>No Asistidas</a>
                    </div>      
                    <div class="date-filter">
                        <div class="input-group has-validation">
                            <span class="input-group-text">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.125 1V2.875M12.875 1V2.875M1 14.125V4.75C1 4.25272 1.19754 3.77581 1.54917 3.42417C1.90081 3.07254 2.37772 2.875 2.875 2.875H14.125C14.6223 2.875 15.0992 3.07254 15.4508 3.42417C15.8025 3.77581 16 4.25272 16 4.75V14.125M1 14.125C1 14.6223 1.19754 15.0992 1.54917 15.4508C1.90081 15.8025 2.37772 16 2.875 16H14.125C14.6223 16 15.0992 15.8025 15.4508 15.4508C15.8025 15.0992 16 14.6223 16 14.125M1 14.125V7.875C1 7.37772 1.19754 6.90081 1.54917 6.54917C1.90081 6.19754 2.37772 6 2.875 6H14.125C14.6223 6 15.0992 6.19754 15.4508 6.54917C15.8025 6.90081 16 7.37772 16 7.875V14.125" stroke="#A5ADB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                    
                            </span>
                            <input type="date" class="form-control" id="toDate"
                                aria-describedby="inputGroupPrepend" required>
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                        <div class="input-group has-validation">
                            <span class="input-group-text">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.125 1V2.875M12.875 1V2.875M1 14.125V4.75C1 4.25272 1.19754 3.77581 1.54917 3.42417C1.90081 3.07254 2.37772 2.875 2.875 2.875H14.125C14.6223 2.875 15.0992 3.07254 15.4508 3.42417C15.8025 3.77581 16 4.25272 16 4.75V14.125M1 14.125C1 14.6223 1.19754 15.0992 1.54917 15.4508C1.90081 15.8025 2.37772 16 2.875 16H14.125C14.6223 16 15.0992 15.8025 15.4508 15.4508C15.8025 15.0992 16 14.6223 16 14.125M1 14.125V7.875C1 7.37772 1.19754 6.90081 1.54917 6.54917C1.90081 6.19754 2.37772 6 2.875 6H14.125C14.6223 6 15.0992 6.19754 15.4508 6.54917C15.8025 6.90081 16 7.37772 16 7.875V14.125" stroke="#A5ADB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                    
                            </span>
                            <input type="date" class="form-control" id="fromDate"
                                aria-describedby="inputGroupPrepend" required>
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                </div>    
            
                <table class="table table-borderless table-appmnts">
                    <thead>
                    <tr class="table-light">
                        <th scope="col">Id Cita</th>
                        <th scope="col">Doc Cliente</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `
}