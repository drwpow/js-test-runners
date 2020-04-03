import convert from "https://cdn.pika.dev/@csstools/convert-colors@^2.0.0";
import test from "test";

test("convert", t => {
  t(convert.rgb2hue(0, 0, 100), 240);
});
