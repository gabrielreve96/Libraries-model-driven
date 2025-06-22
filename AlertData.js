var cr082 = cr082 || {};

cr082.getFormValues = function (executionContext) {
    var formContext = executionContext.getFormContext();

    // Lista de campos que quieres capturar
    var fields = [
        "cr082_paymentmethodname",   // Nombre del método de pago
        "cr082_currentbalance"       // Saldo actual
        // Agrega aquí más campos si lo deseas
    ];

    var data = {};

    fields.forEach(function(fieldName) {
        var attribute = formContext.getAttribute(fieldName);
        if (attribute) {
            data[fieldName] = attribute.getValue();
        } else {
            data[fieldName] = null;
        }
    });

    // Formatear los datos para el alert
    var message = "Datos del formulario:\n";
    for (var key in data) {
        message += key + ": " + data[key] + "\n";
    }

    alert(message);
}
