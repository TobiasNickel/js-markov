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
    // * numeric
    this.type = '';

    if (type === 'text') {
      this.type = type;
    } else if (type === 'numeric') {
      this.type = type;
    } else {
      console.error(`${type} is not a valid type.`);
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
    
    } else if (this.type === 'numeric') {
      
      if (typeof state === 'number') {
        this.states.push(state);
      } else {
        console.error(`${state} is not a number. Failed to add ${state} to the Markov Chain.`);
      }

    } else {

      console.error(`${this.type} is not a valid type for the Markov Chain.`);
      console.error('Valid types are:\ntext\nnumeric');

    }
  }

  // TODO: Write train function
}