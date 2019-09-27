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
    const MORSE_SYMBOLS = {
        '10': '.',
        '11': '-',
    }
    const space = '**********';
    const reg10 = /.{1,10}/g;
    const reg2 = /.{1,2}/g;

    const dotTire = array => 
        array.filter(el => MORSE_SYMBOLS[el]).map(el => el = MORSE_SYMBOLS[el]).join('');
    
    const res = array => {
        for (let i = 0; i < array.length; i++){
            if(array[i] != space){
                array[i] = dotTire(array[i].match(reg2))
            }else array[i] = ' ';
        }
        return array.map(el => el = el === ' ' ? ' ' : MORSE_TABLE[el]).join('');        
    }

    return res(expr.match(reg10));
}

module.exports = {
    decode
}