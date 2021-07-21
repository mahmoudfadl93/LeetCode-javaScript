function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCharCounts = {};

  // Fill sCharCounts

  for (let index = 0; index < s.length; index++) {
    const sChar = s[index];
    sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
  }

  for (let index = 0; index < t.length; index++) {
    const tChar = t[index];

    if (!sCharCounts[tChar]) {
      return false;
    } else {
      sCharCounts[tChar]--;
    }
  }
  return true;
}
module.exports = isAnagram;
