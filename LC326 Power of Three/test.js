const isPowerOfThree = require("./index");

test("works for positive numbers", () => {
  expect(isPowerOfThree(27)).toEqual(true);
  expect(isPowerOfThree(0)).toEqual(false);
});

test("works for negative numbers", () => {
  expect(isPowerOfThree(45)).toEqual(false);
});
