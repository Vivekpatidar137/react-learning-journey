import { sum } from "../sum";

test("Will test the sum function", () => {
  const result = sum(5, 5);

  //ASSERTION
  expect(result).toBe(10);
});
