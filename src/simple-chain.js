const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    console.log(this.chain.length);
    return this.chain.length;
  },
  addLink(item) {
    this.chain.push(item);
    return this;
  },
  removeLink(pos) {
    console.log(this.getLength())
    if (pos > 0 && pos < (this.getLength() + 1) && typeof pos == 'number') {
      this.chain.splice(pos - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    this.chain.forEach((item, idx) => {
      idx == this.chain.length - 1 ? str += `( ${item} )` : str += `( ${item} )~~`;
    });
    console.log(this.chain);
    this.chain = [];
    console.log(this.chain);
    console.log(str);
    return str;
  }
};

module.exports = {
  chainMaker
};
