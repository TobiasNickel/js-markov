document.getElementById('test-2').addEventListener('click', function(evt) {
  markov.clearState();
  markov.addState(txt);
  markov.train();
  console.log(markov.generate(500));
});
