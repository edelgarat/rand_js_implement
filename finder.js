const { rand } = require("./rand");

function find(elements) {
  let index = 0;
  let findsCount = 0;
  while (findsCount !== elements.length) {
    if (rand() === elements[findsCount]) {
      findsCount++;
      if (findsCount > 2 ) console.log(findsCount)
    } else {
      findsCount = 0;
    }
    index++;
  }
  console.log('ok');
}

find([
  248,
  59,
  569,
  136,
  731,
  452,
  258,
  257,
  250,
  660,
  817,
  329,
  754,
]);

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`${rand()}`);
  }
});
