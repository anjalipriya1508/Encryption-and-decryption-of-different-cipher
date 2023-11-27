var encryptedText = ''; // Store the encrypted text globally

function vigenere(text, key, encrypt) {
  var result = '';
  var keyIndex = 0;

  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);

    if (/[a-zA-Z]/.test(char)) {
      var offset = /[a-z]/.test(char) ? 97 : 65;

      // Skip spaces in the key
      while (/[a-zA-Z]/.test(key.charAt(keyIndex % key.length)) === false) {
        keyIndex = (keyIndex + 1) % key.length;
      }

      var keyChar = key.charAt(keyIndex % key.length);
      var keyShift = /[a-z]/.test(keyChar) ? keyChar.charCodeAt(0) - 97 : keyChar.charCodeAt(0) - 65;

      if (encrypt) {
        result += String.fromCharCode((char.charCodeAt(0) - offset + keyShift) % 26 + offset);
      } else {
        result += String.fromCharCode((char.charCodeAt(0) - offset - keyShift + 26) % 26 + offset);
      }

      keyIndex = (keyIndex + 1) % key.length;
    } else {
      result += char;
    }
  }

  return result;
}

function encrypt() {
  var inputText = document.getElementById('inputText').value;
  var key = document.getElementById('key').value.toUpperCase();
  encryptedText = vigenere(inputText, key, true);
  document.getElementById('outputText').innerText = "Encrypted Text -> "+encryptedText;
}

function decrypt() {
  var key = document.getElementById('key').value.toUpperCase();
  var decryptedText = vigenere(encryptedText, key, false);
  document.getElementById('outputText').innerText ="Decrypted Text -> "+ decryptedText;
}