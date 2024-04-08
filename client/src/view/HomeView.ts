import View from "./View";

export default class HomeView extends View {

    public deploy(){
        this.loadView(this.getTemplate());
    }
    
    getTemplate() {
        return `
        <div class="main-page page-content">
            <div class="text-container">
                <h1 class="main-page-title">
                    Centro <br> 
                    de Atención al Cliente UPB
                </h1>
                <p class="main-page-text">
                    Con solo unos clics, puedes programar citas <br>
                    para resolver reclamos, gestionar devoluciones o recibir asesoría <br>
                    sobre nuestros productos.
                </p>
                <div class="actions">
                    <button class="btn-main">INGRESAR</button>
                    <a href="" class="info-link">
                        CONOCE MAS
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.75 3.5H2.875C2.37772 3.5 1.90081 3.69754 1.54917 4.04917C1.19754 4.40081 1 4.87772 1 5.375V14.125C1 14.6223 1.19754 15.0992 1.54917 15.4508C1.90081 15.8025 2.37772 16 2.875 16H11.625C12.1223 16 12.5992 15.8025 12.9508 15.4508C13.3025 15.0992 13.5 14.6223 13.5 14.125V7.25M4.75 12.25L16 1M16 1H11.625M16 1V5.375" stroke="#B6B6B6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                            
                    </a>
                </div>
                <div class="upb-link-container ">
                    <a href="" class="upb-link">www.upb.edu.co</a>
                </div>
            </div>
            <div class="images-container">

            </div>
        </div>
        `
    }
}