const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '';

    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.substring(i, i + 10);
        res+=decodeLetter(letter);
    }

    return res;
}

String.prototype.leftTrim = function() {
    return this.replace(/^0+/,"");
};

function decodeLetter(letter) {
    let res = '';

    letter = letter.leftTrim();

    for (let i = 0; i < letter.length; i += 2) {
        if (letter[i] === '*') {
            return ' ';
        }

        if (letter[i] === '1') {
            if (letter[i + 1] === '1') {
                res += '-';
            }
            else res += '.';
        }
        else break;
    }

    return MORSE_TABLE[res];
}

module.exports = {
    decode
};