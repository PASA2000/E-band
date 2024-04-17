document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-btn").addEventListener("click", function () {
        validateLoginForm();
    });
    document.getElementById('code').addEventListener("click", function (){
        getcode();
    })
});

function validateLoginForm() {
    var email = document.getElementById("email").value;
    var newPassword = document.getElementById('npd').value;
    var confirmPassword = document.getElementById('cpd').value;
    var passwordcode = document.getElementById('pcode').value;

    // Check if email or password or code is empty
    if (email.trim() === "" || newPassword.trim() === "" || confirmPassword.trim() === "" || passwordcode.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    var codeRegex = /^\d{4}$/;
    if (!codeRegex.test(passwordcode)) {
        alert("Please enter recived 4-digit number.");
        return false;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format. Please enter a valid email address.");
        return;
    }

    // password validation 
    if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.\n* Password must have at least 8 characters\n* Password must have a number\n* Password must have a special character\n* Password must have a capital letter in it.");
        return;
    }

    // OTP validation
    if (passwordcode === sessionStorage.getItem('otp')) {
        window.location.href = 'home.html';
    } else {
        alert('Invalid OTP');
    }
    }

    function getcode() {
    var email = document.getElementById("email").value;

    // Generate a random 4-digit OTP
    let otp = Math.floor(Math.random() * 10000);
    otp = otp.toString().padStart(4, '0');

    // Store the OTP in session storage
    sessionStorage.setItem('otp', otp);

    // Send the OTP via email
    Email.send({
        SecureToken: "0cc4c023-de01-4bf7-b318-a268c25ee7e0",
        To: email,
        From: "eband2024@gmail.com",
        Subject: "OTP for password changing",
        Body: otp,
    }).then(function (message) {
        alert(`OTP sent to ${email}`);
    });

    // Your security token is 22bab5df-e016-45d0-b032-22a4652208ca Please take note of this.

    // EC43D9B9B1FB6E66701A526CF1349EE2854E

}


