function validate(){
    if(document.my_form.Name.value ==""){
        alert("Enter your name");
        document.my_form.Name.focus()
    }else if(document.my_form.Email.value ==""){
        alert("please enter your Email");
        document.my_form.Email.focus()

    } 
    else{
        alert("Fill the form")
    }
    
}