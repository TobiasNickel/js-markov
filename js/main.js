// Copyright (c) 2019 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

var output = document.getElementById('output');
var generateButton = document.getElementById('generate');
var numStates = document.getElementById('number-of-states');

// eslint-disable-next-line no-undef
var markov = new Markov();

window.onload = function() {
  generateButton.style.visibility = 'hidden';

  // eslint-disable-next-line no-undef
  markov.addState(repoList);

  markov.train(2);

  numStates.textContent = markov.getStates().length;

  generateButton.style.visibility = 'visible';
};

generateButton.addEventListener('click', function() {
  output.textContent = markov.generate(30);
});
