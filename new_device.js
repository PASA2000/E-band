function validateForm() {
    var userName = document.getElementById("uname").value;
    var telephoneNumber = document.getElementById("T.P").value;
    var address = document.getElementById("Adress").value;
    var age = document.getElementById("Age").value;
    var gender = document.getElementById("M/F").value;
    var nic = document.getElementById("NIC").value;


    var hasCholesterol = document.querySelector('input[name="cholesterol"]:checked');
    var hasDiabetes = document.querySelector('input[name="diabetes"]:checked');
    var otherMedicalConditions = document.getElementById("comment").value.trim();

    //user name validation 
    if (userName === "") {
        alert("Please enter your name.");
        return false;
    }

    //t.p validation
    if (telephoneNumber === "") {
        alert("Please enter your telephone number.");
        return false; 
    }

    var telephoneRegex = /^\d{10}$/;
    if (!telephoneRegex.test(telephoneNumber)) {
        alert("Please enter a valid 10-digit telephone number.");
        return false;
    }

    //address validation    
    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    //age calidation
    if (age === "") {
        alert("Please enter your age.");
        return false; 
    }

    if (isNaN(age) || age < 1 || age > 100) {
        alert("Please enter a valid age.");
        return false; 
    }

    //gender validation 
    if (gender !== "male" && gender !== "female") {
        alert("Please select your gender as either 'male' or 'female'.");
        return false; 
    }

    //NIC validation
    if (nic === "") {
        alert("Please enter your NIC number.");
        return false;
    }

    var nicRegex = /^\d{12}$|^\d{11}[A-Z]$/;
    if (!nicRegex.test(nic)) {
        alert("Please enter a valid NIC number.");
        return false; 
    }

    //check box validation
    if (!hasCholesterol) {
        alert("please check the question 7.");
        return false;
    }

    if (!hasDiabetes) {
        alert("Please check the question 8.");
        return false; 
    }

    //condition validation 
    if (otherMedicalConditions === "") {
        alert("if you do not have avy other meduical conditions type NO.");
        return false;
    }

    return true; // Form submission 
}










