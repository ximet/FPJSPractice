const K = x => y => x;
// S :: (x -> y -> z) -> (x -> z) -> y -> z
const S = x => y => z => x(z)(y(z));
const I = S(K)(K);
// B :: (x -> y -> z) -> x -> (y -> z)
const B = S(K(S))(K)

const C = S(B(B)(S))(K(K))

module.exports = {
  K, S, I, B, C
}
