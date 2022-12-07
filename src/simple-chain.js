const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    console.log(this.chain.length);
    return this;
  },
  addLink(item) {
    this.chain.push(item);
    return this;
  },
  removeLink(pos) {
    try {
      if (pos != 0 && typeof pos == 'number') {
        this.chain.splice(pos - 1, 1);
        return this;
      } else {
        throw new Error("You can't remove incorrect link!");
      }
    } catch(e) {
        console.log(e.message);
        return this;
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
    this.chain = [];
    console.log(str);
  }
};

chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();

module.exports = {
  chainMaker
};
