this.OnchagPropertyLabel= function(
    executionContext
)
{
    const formContext = executionContext.getFormContext();
    
    if(
         formContext.getAttribute("cr082_paymentmethodname").getValue() =="hola"
    ){
         formContext.getControl("cr082_paymentmethodname").setLabel("Hola Mundo");
    }else{
         formContext.getControl("cr082_paymentmethodname").setLabel(
              formContext.getAttribute("cr082_paymentmethodname").getValue()
         );
    }
}