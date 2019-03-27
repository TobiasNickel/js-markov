// eslint-disable-next-line no-undef
var markov = new Markov();

// @ Thanks goes to: Patrick Henry to the Virginia Convention
var txt = 'We have petitioned; we have remonstrated; we have supplicated; we have prostrated ourselves before the tyrannical hands of the ministry and parliament. Our petitions have been slighted; our remonstrances have produced additional violence and insult; our supplications have been disregarded; and we have been spurned, with contempt, from the foot of the throne.';

var words = txt.split('; ');
markov.addState(words);
markov.train();

// eslint-disable-next-line no-unused-vars
document.getElementById('test-1').addEventListener('click', function(evt) {
  markov.clearState();

  var words = txt.split('; ');
  markov.addState(words);
  markov.train();

  console.log(markov.generate(500));
});
