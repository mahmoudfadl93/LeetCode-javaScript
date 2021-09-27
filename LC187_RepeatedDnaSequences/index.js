/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const seen = {};
  const res = [];
  let i = 0;

  while (i + 10 <= s.length) {
    const danSequenc = s.slice(i, i + 10);

    seen[danSequenc] = seen[danSequenc] + 1 || 1;

    if (seen[danSequenc] === 2) {
      res.push(danSequenc);
    }

    i++;
  }

  return res;
};
