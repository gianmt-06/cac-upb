const formsValidator = (submitAction) => {
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (form.checkValidity()) {
                submitAction();
            }
            form.classList.add('was-validated');
        }, false);
    });
};
export default formsValidator;
