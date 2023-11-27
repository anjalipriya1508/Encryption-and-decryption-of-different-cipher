 var defaultAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var defaultKey = generateRandomPermutation();

        function generatePermutation() {
            defaultKey = generateRandomPermutation();
            
            document.getElementById('encryptionKey').innerText=defaultKey;
        }

        function generateRandomPermutation() {
            var shuffledAlphabet = defaultAlphabet.split('').sort(function() {
                return 0.5 - Math.random();
            }).join('');
            return shuffledAlphabet;
        }
var encryptedText = '';
        function encrypt() {
            var inputText = document.getElementById('inputText').value;
            var encryptionKey = document.getElementById('encryptionKey').innerText.toUpperCase() || defaultKey;

            if (!validateKey(encryptionKey)) {
                alert("Invalid encryption key. Key must be a permutation of the alphabet.");
                return;
            }
encryptedText='';
            
            for (var i = 0; i < inputText.length; i++) {
                var char = inputText[i];
                var isUpperCase = char === char.toUpperCase();
                char = char.toUpperCase();

                if (defaultAlphabet.includes(char)) {
                    var index = defaultAlphabet.indexOf(char);
                    var encryptedChar = encryptionKey[index];
                    encryptedText += isUpperCase ? encryptedChar : encryptedChar.toLowerCase();
                } else {
                    encryptedText += char;
                }
            }

            document.getElementById('outputText').innerText = "Encrypted Text   ->  " +encryptedText;
        }

        function decrypt() {
            var inputText = document.getElementById('inputText').value;
            var encryptionKey = document.getElementById('encryptionKey').innerText.toUpperCase() || defaultKey;

            if (!validateKey(encryptionKey)) {
                alert("Invalid encryption key. Key must be a permutation of the alphabet.");
                return;
            }

            var result = '';
            for (var i = 0; i < encryptedText.length; i++) {
                var char = encryptedText[i];
                var isUpperCase = char === char.toUpperCase();
                char = char.toUpperCase();

                if (defaultAlphabet.includes(char)) {
                    var index = encryptionKey.indexOf(char);
                    var decryptedChar = defaultAlphabet[index];
                    result += isUpperCase ? decryptedChar : decryptedChar.toLowerCase();
                } else {
                    result += char;
                }
            }

            document.getElementById('outputText').innerText ="Decrypted Text-> " + result;
}

        function validateKey(key) {
            return key.length === defaultAlphabet.length &&
                key.split('').every(function(char) {
                    return defaultAlphabet.includes(char.toUpperCase());
                });
        }