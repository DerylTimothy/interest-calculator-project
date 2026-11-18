const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../script');

describe("Interest Calculator Tests", function() {
    it("should calculate simple interest correctly", function() {
        expect(calculateSimpleInterest(1000, 5, 2)).toBe(100);
    });

    it("should calculate total payable amount correctly", function() {
        expect(calculateTotalPayableAmount(1000, 100)).toBe(1100);
    });
});
