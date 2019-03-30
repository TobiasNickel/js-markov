# js-markov

[![Build Status](https://travis-ci.org/Edwin-Pratt/js-markov.svg?branch=master)](https://travis-ci.org/Edwin-Pratt/js-markov) [![Minified size](https://img.shields.io/bundlephobia/min/js-markov.svg)](npmjs.com/package/js-markov) [![Minzipped size](https://img.shields.io/bundlephobia/minzip/js-markov.svg)](npmjs.com/package/js-markov) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/js-markov.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/js-markov/)

js-markov is a JavaScript library that allows you to create powerful Markov Chains.

## Motivation behind js-markov

js-markov was designed to make using Markov Chains much easier, thus allowing you to create powerful text generation programs.

## Live demo

A live demo of js-markov can be seen on [JavaScript repo name generator](https://Edwin-Pratt.github.io/js-markov/).

## Code Example

The following example shows the basic usage js-markov.

```javascript
// Create a new Markov Chain
var markov = new Markov();

// Add some states
markov.addState([
  'Today is sunny',
  'Today is rainy',
  'The weather is sunny',
  'The weather for tomorrow might be rainy'
]);

// Train the Markov Chain
markov.train();

// Generate an output
markov.generate();
```

## Installation

There are two ways to get a copy of js-markov:

- For developing your project in the browser, all you need to do is to include the CDN link:

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

```javascript
var markov = new Markov();
```

After that, we can have some fun!

The next part that we need to do is to add states. A state is a form of an object. In js-markov, a state is a word.

There are two ways to add states:

- Use an array

  ```javascript
  markov.addState([
    'Today is sunny',
    'Today is rainy',
    'The weather is sunny',
    'The weather for tomorrow might be rainy'
  ]);
  ```

- Add a single state

  ```javascript
  markov.addState('The weather for tomorrow might be sunny');
  ```

Awesome :sunglasses:

Now we can train our Markov Chain. The method `train` receives an optional "order" parameter. This order defaults to 3.

The order is only used for dividing the states into ngrams.

```javascript
markov.train();

// Or
markov.train(3);
```

It is time :smiley:

Now we are ready to generate some text!

All we have to do is to use the `generate` method. This method receives an option parameter which will be used to limit the length of the text. By default, it is set to 15.

```javascript
var text = markov.generate();

// Or 
var longText = markov.generate(50);
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

- `getOrder()`

  <br>

  ```javascript
  var order = markov.getOrder();
  ```

  Returns the order of the Markov Chain.

### Miscellaneous methods

- `setOrder()`

  <br>

  ```javascript
  markov.setOrder(4);
  ```

  Sets the order of the Markov Chain. If no parameter is passed, `setOrder` will use the value of 3.

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
