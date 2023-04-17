const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
function isAlphabet(char) {
  return char.toUpperCase() !== char.toLowerCase();
}

class VigenereCipheringMachine {
  #A = 'A'.charCodeAt(0);
  
  constructor(type = true) {
    this.type = type;
  }

  encrypt(data, key) {
    if (!(data && key)) {
      throw new Error('Incorrect arguments!');
    }

    let dataArr = data.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('').map(item => item.charCodeAt(0) - this.#A);
    let keyIdx = 0;
    let res = [];

    for (let i = 0; i < dataArr.length; i++) {
      if (isAlphabet(dataArr[i])) {
        res.push(String.fromCharCode(this.#A + (dataArr[i].charCodeAt(0) - this.#A + keyArr[keyIdx % keyArr.length]) % 26));
        keyIdx++;
      } else {
        res.push(dataArr[i]);
      }
    }

    return this.type ? res.join('') : res.reverse().join('');
  }

  decrypt(data, key) {
    if (!(data && key)) {
      throw new Error('Incorrect arguments!');
    }

    let dataArr = data.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('').map(item => item.charCodeAt(0) - this.#A);
    let keyIdx = 0;
    let res = [];

    for (let i = 0; i < dataArr.length; i++) {
      if (isAlphabet(dataArr[i])) {
        res.push(String.fromCharCode(this.#A + (dataArr[i].charCodeAt(0) - this.#A - keyArr[keyIdx % keyArr.length] + 26) % 26));
        keyIdx++;
      } else {
        res.push(dataArr[i]);
      }
    }

    return this.type ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
