import test from "ava";

function multiply(x, y) {
  return x * y;
}

test("multiply", t => {
  t.is(multiply(2, 2), 4);
});
