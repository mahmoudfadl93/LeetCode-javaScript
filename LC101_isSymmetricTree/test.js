const isSymmetricTre = require("./index");

test("isSymmetricTre([1,2,2,3,4,4,3]) returns true", () => {
  expect(isSymmetricTre([1, 2, 2, 3, 4, 4, 3])).toEqual(true);
});


