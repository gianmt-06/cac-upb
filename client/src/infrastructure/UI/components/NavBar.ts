export default class NavBarView {

    getTemplate(){
        return `
            <div class="nav-bar">
                <div class="logo-container">
                    <a href="">
                        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H18.5M2 10H24M2 18H13" stroke="#171717" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                    </a>
                    <h1 class="nav-bar-logo">CAC-UPB</h1>
                </div>

                <ul class="nav-links">
                    <li class="nav-link"><a href="">Nosotros</a></li>
                    <li class="nav-link">
                        <div class="dropdown ">
                            <a class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Citas</a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Agenda tu cita</a></li>
                                <li><a class="dropdown-item" href="#">Reagenda tu cita</a></li>
                                <li><a class="dropdown-item" href="#">Cancela tu cita</a></li>
                                <li><a class="dropdown-item" href="#">Tutorial </a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-link"><a href="">Tickets</a></li>
                    <li class="nav-link"><a href="">Ingresar</a></li>
                </ul>
            </div>
        `
    }
}