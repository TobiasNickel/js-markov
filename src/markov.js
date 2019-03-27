// Copyright (c) 2019 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// eslint-disable-next-line no-unused-vars
class Markov {
  constructor(type = 'text') {
    // This variable will hold the type of data which the Markov Chain will receive
    // Currently, the valid types are:
    //
    // * text
    this.type = '';

    if (type === 'text') {
      this.type = type;
    } else {
      console.error(`${this.type} is not a valid type for the Markov Chain.`);
      console.error('Valid types are:\ntext\nnumeric');
    }

    // This is an array that will hold all of our states
    this.states = [];

    // This is an object which will contain a list of each possible outcome
    this.possibilities = {};

    // This variable holds the order
    this.order = 3;

    // This array will keep track of all the possible ways to start a sentence
    this.start = [];
  }

  addState(state) {
    if (Array.isArray(state)) {
      this.states = Array.from(state);
    } else {
      this.states.push(state);
    }
  }

  clearState() {
    this.states = [];
    this.start = [];
    this.possibilities = {};
  }

  train() {
    for (let i = 0; i < this.states.length; i++) {
      this.start.push(this.states[i].substring(0, this.order));

      for (let j = 0; j <= this.states[i].length - this.order; j++) {
        let gram = this.states[i].substring(j, j + this.order);

        if (!this.possibilities[gram]) {
          this.possibilities[gram] = [];
        }

        this.possibilities[gram].push(this.states[i].charAt(j + this.order));
      }
    }
  }

  generate(chars = 15) {
    let startingState = this.random(this.start, 'array');
    let result = startingState;
    let current = startingState;
    let next = '';

    if (typeof startingState === 'undefined') {
      console.error('Error at Markov.generate(): variable startingState was set to undefined.\n\n\tPlease report this bug at github.com/Edwin-Pratt/js-markov/issues.');
    }

    for (let i = 0; i < chars - this.order; i++) {
      next = this.random(this.possibilities[current], 'array');

      if (!next) {
        break;
      }
      
      result += next;
      current = result.substring(result.length - 3, result.length);
    }

    return result;
  }

  random(obj, type) {
    if (Array.isArray(obj) && type === 'array') {
      let index = Math.floor(Math.random() * obj.length);

      return obj[index];
    }

    if (typeof obj === 'object' && type === 'object') {
      let keys = Object.keys(obj);
      let index = Math.floor(Math.random() * keys.length);

      return keys[index];
    }
  }
}

module.exports = Markov;
