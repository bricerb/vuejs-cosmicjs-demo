import Calculator from "../src/components/calculator";

describe("Calculator", () => {
    it("should be instanceable", () => {
        expect(new Calculator()).toBeInstanceOf(Calculator);
    });
});