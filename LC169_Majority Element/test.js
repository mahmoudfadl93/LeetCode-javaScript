const majorityElement = require("./index");
test("majorityElement([3,2,3]) returns 3", () => {
  expect(majorityElement([3, 2, 3])).toEqual(3);
});

test("majorityElement([2,2,1,1,1,2,2]) returns 2", () => {
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
});
