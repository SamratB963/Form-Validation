document.getElementById("form").addEventListener("submit", myformSubmit);

function myformSubmit(event) {
    event.preventDefault();
    var passCharacters = new Array("/", "!", "@", "#", "$", "%", "%", "^", "&", "*",
        "(", ")", "_", "+", "=", "-", "`", "~", ";", "<",
        ">", ".", "?", "[", "]", "{", "}", ",");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var atSymbol = email.indexOf('@')
    var dotSymbolIndex = atSymbol + 1
    var doubledot = "." + "."

    console.log(doubledot.length)

    console.log(email.charAt(email.length-3))




    console.log(passCharacters.length)

    if (name == "") {
        document.getElementById("nameError").innerHTML = `<span class = "xError">X</span> <span>Name field should not be empty</span>`;

    }
    else {
        document.getElementById("nameError").innerHTML = null;
    }
    if (email == "") {
        document.getElementById("emailError").innerHTML = `<span class = "xError">X</span> <span>Email field should not be empty</span>`
    }
    else if (email.charAt(0) == '@') {
        document.getElementById("emailError").innerHTML = `<span class = "xError">X</span> <span>No character before @ </span>`;
    }
    else if (email.charAt(dotSymbolIndex) == '.') {
        document.getElementById("emailError").innerHTML = `<span class = "xError">X</span> <span>Domain cannot start with dot .</span>`
    }
    else if (email.charAt(0) == '.') {
        document.getElementById("emailError").innerHTML = `<span class = "xError">X</span> <span>An email should not start with dot .</span>`
    }
    else if (email.search(/[\@]/) < 0) {
        document.getElementById("emailError").innerHTML = `<span class = "xError">X</span> <span> @ is not present</span>`
    }
    
    else if (email.search(/[\!\[\]\{\}\/\?\#\$\%\^\`\|\~\=\&\*\'\"\(\)\+\,\;\:]/) > 0) {
        document.getElementById("emailError").innerHTML = `<span class = "xError">X</span> <span>Only allows character, digit, underscore and dash</span>`
    }
    
    // else if( (email.charAt(email.length-3) != '.')){
    //     // console.log(email.charAt(email.length-3))
    //     let char = "."  + email.charAt(email.length-1) 
    //     document.getElementById("emailError").innerHTML = `<span class = "xError">X</span> <span>${char} is not a valid tld</span>`
    // }
    
    else{
        for(let i = 0; i<email.length; i++){
            if(email[i] + email[i+1] === ".."){
                document.getElementById("emailError").innerHTML = `<span class = "xError">X</span> <span> Double dots are not allowed</span>`
                console.log("Yes")
            }
            else{
                document.getElementById("emailError").innerHTML = null
            }
        }
        
    }

    if (password.length < 7) {
        document.getElementById("passwordError").innerHTML = `<span class = "xError">X</span> <span>Length of the password should be greater than 6</span>`
    }
    else {
        for (i = 0; i < passCharacters.length; i++) {
            if (password.search(/[\!\[\]\{\}\/\?\@\#\$\%\^\`\|\~\=\&\*\'\"\(\)\_\+\.\,\;\:\-]/) > 0) {
                document.getElementById("passwordError").innerHTML = `<span class = "xError">X</span> <span>Password must only include alphanumeric characters</span>`
            }
            else if (password.search(/[A-Z]/) < 0) {
                document.getElementById("passwordError").innerHTML = `<span class = "xError">X</span> <span>Password must contain atleast one uppercase alphabet</span>`
            }
            else if (password.search(/[0-9]/) < 0) {
                document.getElementById("passwordError").innerHTML = `<span class = "xError">X</span> <span>Password must contain atleast one numeric value</span>`
            }
            else {
                document.getElementById("passwordError").innerHTML = null;
            }
        }

    }



}