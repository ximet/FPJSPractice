// reduce :: (a -> b) -> b -> [a] -> b 
const reduce = f => y => ([x, ...xs]) => {
  if(x === undefined) {
    return y;
  }
  else {
    return reduce (f) (f (y) (x)) (xs)
  }
}

module.exports = {
  reduce
}
