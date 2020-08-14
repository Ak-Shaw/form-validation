function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#submitButton").click(function(){
    
    var errorMessage="";
    
    if(isEmail($("#email").val())==false&&$("#email").val()!=""){
        errorMessage+="your email address is invalid\n";
    }
    
    if($("#email").val()==""){
        errorMessage+="email field is empty\n";
    }
    
    if($.isNumeric($("#phone").val())==false&&$("#phone").val()!=""){
        errorMessage+="your phone number is invalid\n";
    }
    
    if($("#phone").val()==""){
        errorMessage+="telephone field is empty\n";
    }

    
    if($("#password").val()!=$("#passwordConfirm").val()){
        errorMessage+="passwords don't match\n";
    }
    
    if($("#password").val()==""){
        errorMessage+="password field is empty\n";
    }
    
    if(errorMessage!="")
        alert(errorMessage);
    else
        alert("form data is valid");
    
});