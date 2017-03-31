const { Y } = require('../combinators/combinators.js');
// reduce :: (a -> b) -> b -> [a] -> b

const reduce = f => y => ([x, ...xs]) => {
  if(x === undefined) {
    return y;
  }
  else {
    return reduce (f) (f (y) (x)) (xs)
  }
}

const reduce = f => Y(g => y => xs => length(xs) < 1 ? y : g(f(y)(head(xs)))(tail(xs)));

const map = f => xs => xs.map(f); //for carryng
const cons = a => b => [a, ...b];
const build = g => g(cons)([]);


module.exports = {
  reduce, map
}
