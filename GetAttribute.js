var cr083 = cr083 || {}; 

cr083.getFormValuesProperties = function(executionContext) {
    var formContext = executionContext.getFormContext();

    var campoNombrePayment = formContext.getAttribute("cr082_paymentmethodname");
    
    if (campoNombrePayment) {
        if (campoNombrePayment.getValue() === "" || campoNombrePayment.getValue() === null) {
            campoNombrePayment.setValue("Aqui va un metodo valido");
        }
    } else {
        console.warn("El campo 'cr082_paymentmethodname' no existe en el formulario.");
    }
};
