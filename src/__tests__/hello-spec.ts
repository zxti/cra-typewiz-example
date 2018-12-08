function greet(value) {
  return `Hello ${value}`;
}
describe("hello", () => {
  it("works", () => {
    console.log(greet("TypeWiz"));
  });
});
