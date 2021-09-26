const singleNumber = require("./index");

test("singleNumber([1,2,2,3,4,4,3]) returns 1", () => {
  expect(singleNumber([1, 2, 2, 3, 4, 4, 3])).toEqual(1);
});
