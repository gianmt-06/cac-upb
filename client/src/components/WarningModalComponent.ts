export default class WarningModalComponent {

    getTemplate(){
        return `
            <div class="warning-component-modal page-content">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body warning-modal-body">
                                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38 26.3333V40.9167M73 38C73 42.5963 72.0947 47.1475 70.3358 51.3939C68.5769 55.6403 65.9988 59.4987 62.7487 62.7487C59.4987 65.9988 55.6403 68.5769 51.3939 70.3358C47.1475 72.0947 42.5963 73 38 73C33.4037 73 28.8525 72.0947 24.6061 70.3358C20.3597 68.5769 16.5013 65.9988 13.2513 62.7487C10.0012 59.4987 7.42313 55.6403 5.66422 51.3939C3.9053 47.1475 3 42.5963 3 38C3 28.7174 6.68749 19.815 13.2513 13.2513C19.815 6.68749 28.7174 3 38 3C47.2826 3 56.185 6.68749 62.7487 13.2513C69.3125 19.815 73 28.7174 73 38ZM38 52.5833H38.0311V52.6144H38V52.5833Z" stroke="#DC3545" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <h2 class="warning-modal-title">Atencion...</h2>

                                <p class="warning-modal-subtitle">Esta accion es irreversible</p>
                                <p class="warning-modal-text">
                                    Las citas canceladas no se almacenaran <br>
                                    por lo que tendra que agendarla nuevamente
                                </p>
                                    
                                <div class="actions">
                                    <button type="button" class="btn btn-secondary btn-block" data-bs-dismiss="modal">Regresar</button>
                                    <button type="button" class="btn btn-danger btn-block">Continuar</button>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}