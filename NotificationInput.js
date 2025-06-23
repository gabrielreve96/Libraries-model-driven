var cr083 = cr083 || {};

cr083.inputNotification = function(executionContext) {
    const formContext = executionContext.getFormContext();

    var attr = formContext.getAttribute("cr082_paymentmethodname");
    
    formContext.getControl("cr082_paymentmethodname").addNotification({
                message: ["El campo 'Payment Method Name' no puede estar vacío."],
                notificationLevel: "RECOMMENDATION",
                uniqueID: "paymentMethodError123#"
            });
     
  

    
};
