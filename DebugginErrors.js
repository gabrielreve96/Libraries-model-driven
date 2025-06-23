this.cr082_paymentmethodname = function(executionContext) {
    var formContext = executionContext.getFormContext();
    var control = formContext.getControl("cr082_paymentmethodname"); // <-- pon el name correcto

    if (control) {
        control.setVisible(false);
    } else {
        console.warn("El control no se encontró en el formulario");
        formContext.ui.setFormNotification("El control no se encontró en el formulario", "INFO", "missing_control");
    }
};
