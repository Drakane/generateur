let copyBtn = document.getElementById("copy");

function getPassword() {
    
    let includeLowercase = document.getElementById("includeLowercase").checked;
    let includeUppercase = document.getElementById("includeUppercase").checked;
    let includeNumbers = document.getElementById("includeNumbers").checked;
    let includeSymbols = document.getElementById("includeSymbols").checked;

    
    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    
    let chars = "";
    if (includeLowercase) chars += lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    
    if (chars === "") {
        alert("Veuillez sélectionner au moins un type de caractère.");
        return;
    }

    
    let passwordLengthInput = document.getElementById("passwordLength").value; 
    let passwordLength = Math.max(12, Math.min(128, parseInt(passwordLengthInput)));

    
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }

    
    let passwordField = document.getElementById("password");
    passwordField.value = password;

    
    if (password.length >= 12) {
        copyBtn.style.display = "block";
    }
}