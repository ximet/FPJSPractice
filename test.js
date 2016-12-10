const { K, S, I } = require('./combinators/combinators.js');

console.error(S(K)(K) === I())
