export const getTemplate = () => {
  return `
    <div class="user-view page-content">
              
    <div class="title-user-view">
        <h1 class="ag-cita-title user-title page-title">Servicio al cliente</h1>
        <span class>Codigo cita:</span>
        <span>61516AHUGHTIA</span>
    </div>
    
    <div class="appmnt-info">
        <div class="client-data">
            <div class="row-appmnt-data">
                <span class="appmnt-data-label">Nombre del cliente:</span>
                <span  class="appmnt-data-value" id="name-client">Gian Marco Mora Tami</span>
            </div>
            <div class="row-appmnt-data">
                <span class="appmnt-data-label">Numero de documento:</span>
                <span  class="appmnt-data-value" id="doc-client">CC 1099735628</span>
            </div>
            <div class="row-appmnt-data">
                <span class="appmnt-data-label">Tipo cliente:</span>
                <span  class="appmnt-data-value" id="type-client">Premium</span>
            </div>
        </div>
        <h2 class="appmnt-type-user" id="type-appmnt">RECLAMO</h2>
        <div class="appmnt-data">
            <div class="row-appmnt-data">
                <span class="appmnt-data-label">Fecha: </span>
                <span class="appmnt-data-value" id="date-appmnt">10 de Junio de 2024</span>
            </div>
            <div class="row-appmnt-data">
                <span class="appmnt-data-label">Hora:</span>
                <span class="appmnt-data-value" id="time-appmnt">6:00:00</span>
            </div>
            <div class="row-appmnt-data">
                <span class="appmnt-data-label">Sede:</span>
                <span class="appmnt-data-value" id="location-appmnt">Universidad Pontificia Bolivariana</span>
            </div>
            <div class="description-container">
                <p class="appmnt-data-label appmnt-data-label-description">Descripcion:</p>
                <p class="appmnt-data-value" id="descrition-appmnt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro est quis maiores nulla. Sunt aspernatur, excepturi necessitatibus fuga dicta, officiis perferendis deleniti, dolores doloribus quos cum! Corporis, consequatur sed?</p>
            </div>
        </div>
    </div>
    <div class="row button-container next-appmnt-btn">
        <button type="button" class="btn btn-outline-dark login-button" id="getTicket" >Siguiente</button>
    </div>
    <div class="container-bank">
        <div class="input-group mb-3 bank-container">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Banco" aria-label="Banco" aria-describedby="basic-addon1">
        </div>

    </div>
</div>
        `;
};
