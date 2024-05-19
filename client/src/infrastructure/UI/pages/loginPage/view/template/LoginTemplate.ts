export const getTemplate = () => {
    return `
        <div class="page-content">
            <h1 class="ag-cita-title page-title">Ingresa a tu cuenta</h1>
            <div class=form-container-login>
                <form class="login-form" id="login-form">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="form-group last-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div class="row button-container login-btn">
                        <button type="submit" class="btn btn-outline-dark login-button" id="submitButton" ></button>
                    </div>
                </form>
            </div>
        </div>
        `
}