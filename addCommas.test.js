const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("formats positive integers correctly", () => {
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1000000)).toBe("1,000,000");
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });

  test("formats numbers with decimal points correctly", () => {
    expect(addCommas(12345.678)).toBe("12,345.678");
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  });
});
