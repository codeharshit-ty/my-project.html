function validate(e){
    e.preventDefault();
    const email = document.getElementById("email").Value;
    const pass = document.getElementById("password").Value;
    const age = document.getElementById("age").Value;
    const msgbox = document.getElementById("msgbox");
    let message ="";
    if (email==""){
        message="enter a valid email id";
        msgbox.style.color="red";
      
    }
    else if(pass==""){
        message="enter a valid password";
        msgbox.style.color="red";
    }
    else if(age==""){
        message="enter a valid age";
        msgbox.style.color="red";
    }
    else{
        message="login successfull";
        msgbox.style.color="green";
    }
msgbox.innerText= message;
    
}