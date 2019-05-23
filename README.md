# js-markov

[![Build Status](https://travis-ci.org/Edwin-Pratt/js-markov.svg?branch=master)](https://travis-ci.org/Edwin-Pratt/js-markov) [![Minified size](https://img.shields.io/bundlephobia/min/js-markov.svg)](npmjs.com/package/js-markov) [![Minzipped size](https://img.shields.io/bundlephobia/minzip/js-markov.svg)](npmjs.com/package/js-markov) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/js-markov.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/js-markov/)

**js-markov** is a JavaScript library that allows you to create powerful, yet simple Markov Chains.

## Introduction

- **What are Markov Chains?**

  > A Markov chain is a stochastic model describing a sequence of possible events in which the probability of each event depends only on the state attained in the previous event. - [Wikipedia](https://en.wikipedia.org/wiki/Markov_chain).

- **Why did I create `js-markov`?**

  I wanted to allow people to easily make Markov Chains. By doing so, it would allow people to explore a new path.

---

## Live demo

A live demo of js-markov can be seen on [JavaScript repo name generator](https://Edwin-Pratt.github.io/js-markov/).

## Code Example

The following example shows the basic usage js-markov:

```javascript
// Create a new Markov Chain
// By default, its type is text
var markov = new Markov();

// Add some states
markov.addStates([
  'Today is sunny',
  'Today is rainy',
  'The weather is sunny',
  'The weather for today is sunny',
  'The weather for tomorrow might be rainy'
]);

// Train the Markov Chain
markov.train();

// Generate an output
markov.generateRandom();
```

With the above code, the possible output values for the above code are:

```text
Today is sunny
Today is rainy
The weather is sunny
The weather is rainy
The weather for today is sunny
The weather for today is rainy
The weather for tomorrow might be rainy
```

---

## Installation

There are two ways to get a copy of js-markov:

- For developing your project for a website or web application, all you need to do is to include the following CDN link:

  ```html
  <script src="https://unpkg.com/js-markov/dist/markov.js"></script>
  ```

- For Node.js users, all you have to do is install it with NPM:

  ```bash
  npm install --save js-markov
  ```

  Then, you'll be able to include in your code:

  ```javascript
  const Markov = require('js-markov');
  ```

## Usage

Before using js-markov, you'll need to create a new `Markov` object.

There is only one thing to consider:

- Is your chain going to handle text or numerical data?

The answer is pretty simple:

- If you are going to generate some text, you'll need to create your Markov chain like:

  ```javascript
  var markov = new Markov();
  ```

- If you are going to analyse numbers, or numeric data, then you will need to create your Markov Chain like:

  ```javascript
  var markov = new Markov('numeric');
  ```

After that, we can have some fun!

The next part that we need to do is to add states. A state is a form of an object. In js-markov, a state is a either a numeric number or a word.

There are two ways to add states:

- Use an array

  ```javascript
  // If you are generating words
  markov.addStates([
    'Today is sunny',
    'Today is rainy',
    'The weather is sunny',
    'The weather for tomorrow might be rainy'
  ]);

  // If you are generating numbers
  markov.addStates([
    {
      state: 1,
      predictions: [
        2, 3
      ]
    },
    {
      state: 2,
      predictions: [1, 3]
    },
    {
      state: 3,
      predictions: [2, 1]
    }
  ]);
  ```

- Add a single state

  ```javascript
  // If you are generating text
  markov.addStates('The weather for tomorrow might be sunny');

  // If you are generating numbers
  markov.addStates({
    state: 4,
    predictions: [1, 2, 3]
  });
  ```

Awesome :sunglasses:

Now we can train our Markov Chain. The method `train` receives an optional "order" parameter. This order defaults to 3.

Note that the order is not used when your Markov Chain is generating a number.

For Markov Chains that generate text, order is only used for dividing the states into n-grams.

```javascript
markov.train();

// Or

markov.train(3);
```

It is time :smiley:

Now we are ready to generate some data!

All we have to do is to use the `generateRandom` method. For generating text, this method receives an optional parameter which will be used to limit the length of the text. By default, it is set to 15.

If the Markov Chain is generating numbers, the order will be used as a counter for the amount of numbers to return in an array.

```javascript
// For generating text
var text = markov.generate();

// Or
var longText = markov.generate(50);

// ----

var numbers = markov.generate(); // Get 15 numbers

// Or

var lotsOfNumbers = markov.generate(100);
```

## Advanced usage

These are some advanced methods that js-markov offers.

### Cleaning things up

- `clearChain()`

  <br>

  ```javascript
  markov.clearChain();
  ```

  This method will reset the **whole Markov Chain**.

  Once the method is run, you will have a Markov Chain that looks new.

  <br>

- `clearState()`

  <br>

  ```javascript
  markov.clearState();
  ```

  This method will reset two properties:

  ```javascript
  markov.states = [];
  markov.start = [];
  ```

  This is good if you want to refresh all of your states.

  <br>

- `clearPossibilities()`

  <br>

  ```javascript
  markov.clearPossibilities();
  ```

  This method will reset the `possibilities` property to an empty object.

  <br>

  This is method called in the `train()` method.

### Getting values

- `getStates()`

  <br>

  ```javascript
  var states = markov.getStates();
  ```

  Returns an array of all the states in the Markov Chain.

  <br>

- `getPossibilities()`

  <br>

  This function can do two things:

  - If it is not supplied with an argument, It will the whole object:

    ```javascript
    var possibilities = markov.getPossibilities();
    ```

  - If there is a valid parameter, then it will return an array of all the possibilities:

  ```javascript
  var possibilities = markov.getPossibilities('Hey');
  ```

  <br>

- `getOrder()`

  <br>

  ```javascript
  var order = markov.getOrder();
  ```

  Returns the order of the Markov Chain.

  <br>

- `getType()`

  <br>

  ```javascript
  var type = markov.getType();
  ```

  Returns the type of the Markov Chain.

### Miscellaneous methods

- `setOrder()`

  <br>

  ```javascript
  markov.setOrder(4);
  ```

  Sets the order of the Markov Chain. If no parameter is passed, `setOrder` will use the value of 3.

  <br>

- `setType()`

  <br>

  ```javascript
  markov.setType(); // Text
  markov.setType('text');

  markov.setType('numeric');
  ```

  Receives an optional value which can either be `"text"` or `"numeric"`. Defaults to `"text"`.

  Sets the type according to value that was passed.

  <br>

- `predict()`

  <br>

  ```javascript
  var prediction = markov.predict(5);
  ```

  Note: **This function is only supported for numeric Markov Chains**

  Predicts the data based on an input value.

  <br>

- `random()`

  <br>

  ```javascript
  markov.random(obj, type)
  ```

  This is used in the `generate` method to generate the new text.

  `random()` receives two parameters:

  <br>

  - `obj` - The object or array that gets passed

  - `type` - The type of value been passed to `obj` (`'object'` or `'array'`)

  Returns a random value from an array or a random key from an object.

## Contributing

If you are interested in contributing, please have a look at the [contributing guidelines](https://github.com/Edwin-Pratt/js-markov/blob/master/CONTRIBUTING.md).

## License

js-markov is licensed under the MIT License. Please have a look at the [LICENSE file](https://github.com/Edwin-Pratt/js-markov/blob/master/LICENSE) for more information.
