function modInverse(a, m) {
    for (let i = 1; i < m; i++) {
        if ((a * i) % m === 1) {
            return i;
        }
    }
    return 1;
}

function affineEncrypt(text, keyA, keyB) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {  // Uppercase letters
            result += String.fromCharCode(((keyA * (charCode - 65) + keyB) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {  // Lowercase letters
            result += String.fromCharCode(((keyA * (charCode - 97) + keyB) % 26) + 97);
        } else {
            result += text[i];
        }
    }
    return result;
}

function affineDecrypt(text, keyA, keyB) {
    let result = "";
    let keyAInverse = modInverse(keyA, 26);
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((keyAInverse * (charCode - 65 - keyB + 26)) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((keyAInverse * (charCode - 97 - keyB + 26)) % 26) + 97);
        } else {
            result += text[i];
        }
    }
    return result;
}
var outputText;
function encrypt() {
    let inputText = document.getElementById("inputText").value;
    let keyA = parseInt(document.getElementById("keyA").value);
    let keyB = parseInt(document.getElementById("keyB").value);
     outputText = affineEncrypt(inputText, keyA, keyB);
    document.getElementById("result").innerText = "Encrypted Text -> " + outputText;
}

function decrypt() {
    
    let keyA = parseInt(document.getElementById("keyA").value);
    let keyB = parseInt(document.getElementById("keyB").value);
    let decryptedText = affineDecrypt(outputText, keyA, keyB);
    document.getElementById("result").innerText ="Decrypted Text -> " + decryptedText;
}