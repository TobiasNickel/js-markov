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
    // This variable will only work for text
    this.order = 3;
  }

  addState(state) {
    if (this.type === 'text') {
      if (typeof state === 'string') {
        this.states.push(state);
      } else {
        console.error(`${state} is not a string. Failed to add ${state} to the Markov Chain.`);
      }
    } else {
      console.error(`${this.type} is not a valid type for the Markov Chain.`);
      console.error('Valid types are:\ntext\n');
    }
  }

  train() {
    if (this.type === 'text') {
      for (let i = 0; i < this.states.length; i++) {
        for (let j = 0; j <= this.states[i].length - this.order; j++) {
          let gram = this.states[i].substring(j, j + this.order);

          if (!this.possibilities[gram]) {
            this.possibilities[gram] = [];
          }

          this.possibilities[gram].push(this.states[i].charAt(j + this.order));
        }
      }
    } else {
      console.error(`${this.type} is not a valid type for the Markov Chain.`);
      console.error('Valid types are:\ntext');
    }
  }

  generate(numberOfChars = 15) {
    let current = this.random(this.possibilities);
    let result = current;
    let next = '';

    for (let i = 0; i < numberOfChars; i++) {
      let possibilities = this.possibilities[current];

      if (!possibilities) {
        break;
      }

      next = this.random(possibilities[current]);

      result += next;

      current = result.substring(result.length - this.order, result.length);
    }

    return result;
  }

  random(O) {
    if (!Array.isArray(O) && typeof O === 'object') {
      let keys = Object.keys(O);

      let index = Math.floor(Math.random() * keys.length);

      return O[keys[index]];
    } else if (Array.isArray(O)) {
      let index = Math.floor(Math.random() * O.length);

      return O[index];
    }
  }
}
