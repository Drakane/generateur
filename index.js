let copyBtn = document.getElementById("copy");

function savePassword(password) {
    const passwordList = document.getElementById("passwordList");
    const listItem = document.createElement("li");
    listItem.textContent = password;
    passwordList.appendChild(listItem);
}

function getPassword() {
    const passwordLength = document.getElementById("passwordLength").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById("password").value = password;

    savePassword(password); // Ajoute le mot de passe au cadre
}

function generatePassword(length, lowercase, uppercase, numbers, symbols) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let allChars = "";

    if (lowercase) allChars += lowerChars;
    if (uppercase) allChars += upperChars;
    if (numbers) allChars += numberChars;
    if (symbols) allChars += symbolChars;

    if (allChars === "") return "";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}