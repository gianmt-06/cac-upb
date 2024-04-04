export default class ModalTicketComponent {
    getTemplate() {
        return `
        <div class="modal-ticket-component">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal fade" tabindex="-1" id="exampleModal" aria-hidden="true">
                <div class="modal-dialog modal-xl  modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body content-modal">
                            <div class="ticket-template">
                                <img src="./assets/ticketAppmt.svg" alt="">
                                <div class="ticket-data">
                                    <div class="top-section ticket-section">
                                        <span>Codigo Cita</span>
                                        <span>A9045UEO48</span>
                                    </div>
                                    <div class="middle-section ticket-section">
                                        <div class="row center-row">
                                            <span class="ticket-label">Documento</span>
                                            <span class="ticket-info">CC. 1.000.000.000</span>
                                        </div>
                                        <div class="row">
                                            <div class="col left-col">
                                                <span class="ticket-label">Nombres</span>
                                                <span class="ticket-info">Name Name</span>
                                            </div>
                                            <div class="col right-col">
                                                <span class="ticket-label">Apellidos</span>
                                                <span class="ticket-info">LastNm LastN</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col left-col">
                                                <span class="ticket-label">Fecha</span>
                                                <span class="ticket-info">DD/MM/YY</span>
                                            </div>
                                            <div class="col right-col">
                                                <span class="ticket-label">Hora</span>
                                                <span class="ticket-info">00:00 p.m</span>
                                            </div>
                                        </div>
                                        <div class="row center-row">
                                            <span class="ticket-label">Tipo</span>
                                            <span class="ticket-info">CC. 1.000.000.000</span>
                                        </div>
                                        <div class="row center-row">
                                            <span class="ticket-label">Lugar</span>
                                            <span class="ticket-info">
                                                Universidad Pontificia Bolivariana
                                                Kilometro 7 Via Piedecuesta
                                            </span>
                                        </div>
                                        <div class="row">
                                            <span class="exp-date">Exp. 00/00/0000</span>
                                        </div>
                                    </div>
                                    <div class="bottom-section ticket-section">
                                        <svg width="116" height="116" viewBox="0 0 116 116" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 102V88H28V116H0V102ZM24 102V92H4V112H24V102ZM8 102V96H20V108H8V102ZM36 114V112H32V104H36V92H40V88H32V84H16V80H20V76H12V84H8V80H0V76H8V68H4V72H0V64H8V68H12V72H16V68H20V72H28V68H24V64H12V60H24V56H12V52H8V56H0V44H4V48H28V44H24V40H16V44H12V40H4V32H12V40H16V36H24V32H28V36H24V40H28V44H32V36H36V32H32V20H40V24H44V28H40V32H44V56H36V52H32V56H28V60H24V64H28V68H32V72H40V68H36V64H32V60H40V68H44V60H48V68H52V56H56V52H60V56H56V60H60V64H72V60H68V56H64V48H60V44H64V40H68V36H64V32H60V40H56V36H52V40H48V36H52V32H48V20H44V16H48V20H52V4H56V12H64V8H60V0H68V4H64V8H72V4H76V0H84V12H76V8H72V16H76V28H80V24H84V44H92V40H88V32H96V44H104V40H100V32H104V40H108V36H116V44H112V40H108V44H104V56H108V60H104V64H96V68H92V72H84V68H80V64H76V72H80V76H92V80H100V76H96V72H100V68H104V72H108V76H112V68H108V64H116V76H112V84H116V92H112V104H116V108H104V116H92V112H100V108H92V100H88V108H84V112H88V116H80V104H76V112H72V108H68V92H72V104H76V92H80V84H76V80H72V76H76V72H72V68H68V84H72V88H64V96H60V104H64V108H60V112H68V116H60V112H56V108H52V116H36V114ZM48 108V104H52V92H44V96H48V100H40V104H36V108H40V112H48V108ZM104 104V100H108V92H112V88H108V76H104V88H108V92H104V96H100V108H104V104ZM84 102V100H80V104H84V102ZM60 94V92H56V96H60V94ZM96 90V84H84V96H96V90ZM88 90V88H92V92H88V90ZM56 86V84H64V80H56V76H52V80H56V84H48V80H44V84H40V80H36V76H32V72H28V76H24V80H28V76H32V80H36V84H40V88H56V86ZM44 74V72H40V76H44V74ZM64 72V68H56V72H60V76H64V72ZM88 66V64H84V68H88V66ZM96 62V60H100V48H96V52H92V56H88V52H80V48H76V44H80V32H76V28H72V24H68V28H64V16H68V20H72V16H68V12H64V16H60V28H64V32H68V28H72V40H68V44H64V48H68V56H72V52H80V56H84V60H92V64H96V62ZM92 58V56H96V60H92V58ZM28 54V52H32V48H28V52H24V56H28V54ZM40 46V44H36V48H40V46ZM40 26V24H36V28H40V26ZM56 24V20H52V28H56V24ZM80 6V4H76V8H80V6ZM112 114V112H116V116H112V114ZM112 56V52H108V48H112V52H116V60H112V56ZM0 14V0H28V28H0V14ZM24 14V4H4V24H24V14ZM8 14V8H20V20H8V14ZM88 14V0H116V28H88V14ZM112 14V4H92V24H112V14ZM96 14V8H108V20H96V14ZM32 14V12H36V16H32V14ZM40 10V8H36V0H40V4H44V0H48V4H44V12H40V10Z"
                                                fill="black" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="tutorial">
                                <h1 class="tutorial-title">Tu cita fue agendada
                                    satisfactoriamente!</h1>
                                <p>A continuacion te presentamos la lista de pasos a seguir</p>
                                <ul class="steps-list">
                                    <li>
                                        <p>
                                            Guarda tu ticket en tu telefono, puedes escanear el codigo QR o copiar el
                                            archivo
                                            que se acaba de descargar en tu navegador.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Acercate al lugar indicado en la fecha y hora establecidas, procura llegar
                                            con 15
                                            minutos de anticipacion.
                                        </p>
                                    </li>
                                    <li>
                                        <p>Cuando estés en el centro de atencion, ubica la maquina que te generará el
                                            ticket
                                            para indicar tu turno en cola. Puedes consultar mas informacion sobre los
                                            tickets en
                                            la seccion correspondiente o en el centro de atencion.</p>
                                        <p>Nota. Debes llevar el ticket que ves en pantalla</p>
                                    </li>
                                    <li>
                                        <p>Espera tu turno y resuelve tus dudas</p>
                                    </li>
                                </ul>
                                <div class="row button-container">
                                    <button type="button" class="btn btn-outline-dark agendar-button"
                                        id="submitButton" data-bs-dismiss="modal">Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
