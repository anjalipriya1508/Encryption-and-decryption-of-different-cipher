
let encryptedMessage = '';
function encrypt() {
    let message = document.getElementById('message').value;
    let shift = (document.getElementById('shift').value);
    encryptedMessage='';
    if (message.trim() === "") {
        alert("Please enter something!");
        return false;
      }
if (shift.trim() ==="") {
        alert("Please enter something!");
        return false;
      }
else{
shift=parseInt(shift);
}

    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            encryptedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            encryptedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            // Non-alphabetic characters
            encryptedMessage += message.charAt(i);
        }
    }

    document.getElementById('result').innerText= 'Encrypted Message: ' + encryptedMessage;
}
function decrypt() {
    let message=encryptedMessage;
    //var message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);
    
    let decryptedMessage = '';

    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            let val=(charCode - 65 - shift);
            if(val>0)
            decryptedMessage += String.fromCharCode(((charCode - 65 - shift) % 26) + 65);
            else
{        decryptedMessage += String.fromCharCode(((charCode - 65 - shift +26) % 26) + 65);
}

        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            let val=(charCode - 97 - shift);
            if(val>0)
            decryptedMessage += String.fromCharCode(((charCode - 97 - shift) % 26) + 97);
            else
{        decryptedMessage += String.fromCharCode(((charCode - 97 - shift +26) % 26) + 97);
}
        } else {
            // Non-alphabetic characters
            decryptedMessage += message.charAt(i);
        }
    }

    document.getElementById('result').innerText = 'Decrypted Message: ' + decryptedMessage;
}