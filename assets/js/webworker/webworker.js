function factorial(number) {
  function recFact(number, result) {
    if (number === 1 || number === 0) {
      return result;
    } else {
      return recFact(number - 1, number * result);
    }
  }

  return recFact(number, 1);
}

self.addEventListener('message', function (event) {
  var results = [];
  var limit = event.data.limit;

  for (var num = 1; num <= limit; num++) {
    results.push({ number: num, result: factorial(num) });
  }

  postMessage(results);
});
