// Determine whether an integer is a palindrome. An integer is
// a palindrome when it reads the same backward as forward.
// Solve this WITHOUT converting the integer to a string.
// -------------------------------------------------------------
// function isPalindrome(121) --> true
// function isPalindrome(-121) --> false
// function isPalindrome(10) --> false

function isPowerOfThree(n) {
  if (n === null || n === 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;

  // if(n === null || n === 0 ) return false;
  // if(n % 3 == 0 ) return true;
  // return false;
}

module.exports = isPowerOfThree;
