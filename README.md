# js-markov

A JavaScript library to help you create Markov Chains

---

## :beginner: Introduction

Markov Chains are very powerful, in fact, they are sometimes used in predicting the weather :cloud: or even generating sentences and words :pencil2:

Some odd uses for Markov Chains are:

* Hashing algorithms and cryptographic keys :key:

* Some sites use Markov Chains to grade how likely a person will open the link (e.g., Google)

* Baby name generators may use Markov Chains

* [This JavaScript Repo Name generator](https://mrsharpoblunto.github.io/foswig.js/) uses a Markov Chain

Markov chains are a form of Machine Learning algorithm. And, because of that reason, we say that they *learn*. Markov chains use are list of probabilities to determine their output. Thus, they are biased about each state (i.e., how likely is the current state going to change to state B?)

---

## :muscle: Getting started

There are 4 ways to import `js-markov` into your project.

- Add the `script` tag to your HTML file:

  This is a fast way to import `js-markov`.

  ```html
  <script src="https://unpkg.com/js-markov/dist/markov.js"></script>
  ```

- Use NPM and import `js-markov` from `node_modules`.

  This is another option if you're developing a Node.js application, and you want to serve `js-markov`.

  Just import `js-markov` from:

  ```html
  <script src="./node_modules/js-markov/dist/markov.js"></script>

- Create a server and serve `js-markov`.

  Maybe allow the application to make a `GET` request to `lib/js-markov` and respond with `node_modules/js-markov/dist/markov.js`

- Import `js-markov` in one of your server-side files.

  ```javascript
  const Markov = require('js-markov');
  ```

If your are using NPM, you'll need to install it using:

```bash
npm install --save js-markov

# Or:
# npm i js-markov
```

---

## :rocket: Usage

### Notes

- In the browser, there is an object called `Markov` which gets imported when you include `markov.js` using the CDN:

```html
<script src="https://unpkg.com/js-markov/dist/markov.js"></script>
```

- If you're using `js-markov` on the server-side (i.e., Node.js), you'll need to import `js-markov` using:

```javascript
const Markov = require('js-markov');
```

### Creating a Markov Chain

The first thing that we have to do is to create a `Markov` object. This can easily be done using:

```javascript
var markov = new Markov();
```

After that, we need add our states (or, words). To do this, we use the `addState` function. `addState` can receive an array of states or a single state.

```javascript
markov.addState(['Today is cold', 'Today was cold', 'Today is hot', 'Today was hot']);

markov.addState('Today it rained');
```

Once we have done that, it is time to train our Markov Chain. The train function populates two properties of `Markov`, namely `possibilities` and `start`.

```javascript
markov.train();
```

Finally, the last thing to do: generate some text!

To do this, `Markov` has a function called `generate`. This function receives an optional parameter indicating the number of characters that it must output. By default, this value is 15.

```javascript
markov.generate(); // Generate 15 characters

markov.generate(100); // Generate 100 characters
```

### Advanced features

These features are more advanced features.

- `Markov.clearState`
  
  This function will clear all of the properties of the Markov Chain.
  
  <br>

  ```javascript
  markov.clearState();
  ```

  :warning: After using `clearState`, you'll need to add new states. Also, you'll need to call `train`.

<br>

- `Markov.setOrder`

This function is used to set the order of your Markov Chain. The default value is 3.

The lower the order is, the more random your possibilities will be.

```javascript
markov.setOrder(); // Set the order to 3.

markov.setOrder(4); // Set the order to 4.
```

---

## Contributing and bugs

All of the information about how to contribute and report bugs can be found [here](./CONTRIBUTING.md).

---

## License

`js-markov` is licensed under the MIT License.

Please have a look at the [LICENSE file](./LICENSE) for more details.

---

Copyright :copyright: 2019 Edwin Pratt
