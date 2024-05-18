import { getTutorialTemplate } from "../../../../components/assets/TutorialTicketTemplate"

export const getTicketTemplate = () => {
    return `
    <div class="validate-ticket-page page-content">
                <div class="tutorial-ticket">
                    ${getTutorialTemplate()}
                </div>
                <div class="form-ticket-container">
                    <h1 class="form-ticket-title">Bienvenido</h1>
                    <p class="form-title-paragraph">Aqui te indicaremos el lugar para que atiendan tu solicitud.<br>
                        Ingresa la informacion requerida para obtener tu ticket</p>
                    <div id="formTicketContainer">
                    
                    </div>
                </div>
            </div>
    `
}