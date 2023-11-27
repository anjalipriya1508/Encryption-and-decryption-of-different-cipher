function createMatrix(key) {
  const matrix = [];
  const keySet = new Set();

  key = key.toUpperCase().replace(/J/g, 'I');

  for (let char of key) {
      if (char >= 'A' && char <= 'Z' && !keySet.has(char)) {
          keySet.add(char);
      }
  }

  for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(65 + i);
      if (char !== 'J' && !keySet.has(char)) {
          keySet.add(char);
      }
  }

  let iterator = keySet.values();
  for (let i = 0; i < 5; i++) {
      matrix.push([]);
      for (let j = 0; j < 5; j++) {
          matrix[i][j] = iterator.next().value;
      }
  }

  return matrix;
}

function findPosition(matrix, char) {
  for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
          if (matrix[i][j] === char) {
              return { row: i, col: j };
          }
      }
  }
}
let result = '';
function encrypt() {
    const inputText = document.getElementById('inputText').value.toUpperCase().replace(/J/g, 'I');
    const key = document.getElementById('key').value.toUpperCase();
result='';
    let matrix = createMatrix(key);

    for (let i = 0; i < inputText.length; i += 2) {
        let char1 = inputText[i];
        let char2 = i + 1 < inputText.length ? inputText[i + 1] : 'X';

        if (char1 === char2) {
            char2 = 'X';
            i--;
        }

        // Ignore special characters during encryption
        if (char1 !== ' ' && char2 !== ' ' && !/[.,-]/.test(char1) && !/[.,-]/.test(char2)) {
            const pos1 = findPosition(matrix, char1);
            const pos2 = findPosition(matrix, char2);

            let encryptedChar1, encryptedChar2;

            if (pos1.row === pos2.row) {
                encryptedChar1 = matrix[pos1.row][(pos1.col + 1) % 5];
                encryptedChar2 = matrix[pos2.row][(pos2.col + 1) % 5];
            } else if (pos1.col === pos2.col) {
                encryptedChar1 = matrix[(pos1.row + 1) % 5][pos1.col];
                encryptedChar2 = matrix[(pos2.row + 1) % 5][pos2.col];
            } else {
                encryptedChar1 = matrix[pos1.row][pos2.col];
                encryptedChar2 = matrix[pos2.row][pos1.col];
            }

            result += encryptedChar1 + encryptedChar2;
        } else {
            result += char1 + char2;
        }
    }

    document.getElementById('outputText').innerText = result;
}

function decrypt() {
    const key = document.getElementById('key').value.toUpperCase();
    let matrix = createMatrix(key);
    let decryptedText = '';

    for (let i = 0; i < result.length; i += 2) {
        let char1 = result[i];
        let char2 = i + 1 < result.length ? result[i + 1] : 'X';

        // Ignore special characters during decryption
        if (char1 !== ' ' && char2 !== ' ' && !/[.,-]/.test(char1) && !/[.,-]/.test(char2)) {
            const pos1 = findPosition(matrix, char1);
            const pos2 = findPosition(matrix, char2);

            let decryptedChar1, decryptedChar2;

            if (pos1.row === pos2.row) {
                decryptedChar1 = matrix[pos1.row][(pos1.col - 1 + 5) % 5];
                decryptedChar2 = matrix[pos2.row][(pos2.col - 1 + 5) % 5];
            } else if (pos1.col === pos2.col) {
                decryptedChar1 = matrix[(pos1.row - 1 + 5) % 5][pos1.col];
                decryptedChar2 = matrix[(pos2.row - 1 + 5) % 5][pos2.col];
            } else {
                decryptedChar1 = matrix[pos1.row][pos2.col];
                decryptedChar2 = matrix[pos2.row][pos1.col];
            }

            decryptedText += decryptedChar1 + decryptedChar2;
        } else {
            decryptedText += char1 + char2;
        }
    }

    // Remove 'X' characters added during encryption
    decryptedText = decryptedText.replace(/X/g, '');

    document.getElementById('outputText').innerText = decryptedText;
}