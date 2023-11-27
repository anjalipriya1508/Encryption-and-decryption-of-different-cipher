var encryptedText='';
function encrypt() {
            var inputText = document.getElementById('inputText').value;
            var otpKey = document.getElementById('otpKey').value;
           encryptedText='';
            if (inputText.length !== otpKey.length) {
                alert("Input text and OTP key must be of the same length.");
                return;
            }

            
            for (var i = 0; i < inputText.length; i++) {
                var charCode = inputText.charCodeAt(i) ^ otpKey.charCodeAt(i);
                encryptedText += String.fromCharCode(charCode);
            }

            document.getElementById('result').innerText = " Encrypted Text :->  "+encryptedText;
        }

        function decrypt() {
            
            var otpKey = document.getElementById('otpKey').value;

            if (encryptedText.length !== otpKey.length) {
                alert("Encrypted text and OTP key must be of the same length.");
                return;
            }

            var decryptedText = '';
            for (var i = 0; i < encryptedText.length; i++) {
                var charCode = encryptedText.charCodeAt(i) ^ otpKey.charCodeAt(i);
                decryptedText += String.fromCharCode(charCode);
            }

            document.getElementById('result').innerText =" Decrypted Text :->  "+decryptedText;
        }