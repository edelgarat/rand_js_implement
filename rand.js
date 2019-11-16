const A = 48271;
const M = Math.pow(2,31) - 1;

let next = +new Date();
// let next = 1;

const MAX = 1000;

function rand() {
  next = next * A % M;
  return next % MAX;
}

function crand(value) {
  next = value;
}

module.exports = {
  rand,
  crand
};
