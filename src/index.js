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

function decode(str) {
    let arr = [];
    for (let i = 0; i < str.length; i += 10) {
      arr.push(str.slice(i, i + 10));
    }
    console.log(arr);

    let arr2 = [];
    for (let j = 0; j < arr.length; j++) {
      arr2.push(
        arr[j]
          .toString()
          .replace(/10/g, ".")
          .replace(/11/g, "-")
          .replace(/0/g, "")
      );
    }
    console.log(arr2);

    let result = [];
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] === "**********") {
        result.push(" ");
      }
      result.push(MORSE_TABLE[arr2[i]]);
    }
    console.log(result);

    return result.join("");
}

module.exports = {
    decode
}