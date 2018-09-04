describe("The Landing component", () => {
  beforeEach(() => {
    console.log("Before Each");
  });

  beforeAll(() => {
    console.log("Before All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  afterAll(() => {
    console.log("After all");
  });

  it("should not regress", () => {
    expect(2 + 2).toEqual(4);
  });

  it("should be gideon", () => {
    expect(10 + 2).toEqual(12);
  });
});
