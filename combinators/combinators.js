const K = x => y => x;
const S = x => y => z => x(z)(y(z));
const I = S(K)(K);

module.exports = {
  K, S, I
}
