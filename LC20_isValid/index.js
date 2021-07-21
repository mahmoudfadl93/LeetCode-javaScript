const isValid = (s) => {
  let stack = [];

  let parisHashMap = { "(": ")", "{": "}", "[": "]" };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (parisHashMap[char]) {
      stack.push(char);
    } else if (parisHashMap[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;
