import Calculator from "../src/components/calculator";

describe("Calculator", () => {
    it("should be instanceable", () => {
        expect(new Calculator()).toBeInstanceOf(Calculator);
    });
});

describe("add", () => {
    it("should sum up 2 numbers", () => {
        const calculator = new Calculator();
        expect(calculator.add(3, 2)).toBe(5);
    });
});

describe("subtract", () => {
    it("should subtract 2 numbers", () => {
        const calculator = new Calculator();
        expect(calculator.subtract(3, 2)).toBe(1);
    });
});