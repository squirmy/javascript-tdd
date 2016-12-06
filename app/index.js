var FizzBuzz = require('./fizzbuzz.js');

function runFizzBuzz(start, end) {
  var result = '';

  for(var i = start; i <= end; i++) {
    result += FizzBuzz(i) + '\n';
  }

  console.log(result);
  return result;
}


module.exports = runFizzBuzz(1, 100);
