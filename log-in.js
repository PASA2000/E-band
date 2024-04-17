const eyeclose = document.getElementById("eyeclose");
const email = document.getElementById("email");
const password = document.getElementById("password");

eyeclose.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeclose.src = "eye-open.png"
    }else{
        password.type = "password";
        eyeclose.src = "eye-close.png"
    }
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-btn").addEventListener("click", function () {
        validateLoginForm();
    });
});


function validateLoginForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if email or password is empty
    if (email.trim() === "" || password.trim() === "") {
        alert("Please enter Email and password.");
        return;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format. Please enter a valid email address.");
        return;
    }

    // Password validation
    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?!.*\s).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("* Password must have at least 8 characters\n* Password must have a number\n* Password must have a special character\n* Password must have a capital letter in it.");
        return;
    }
    
    window.location.href = './home.html';
}




