import { expect, test } from "vitest"
import { calculateMortgage } from "../MortgageManager"

const testCalculation = calculateMortgage(100000, 5, 30, 12, true);

// Monthly payment caclulation
test('monthly payment is correct', () => {
	// P=100.000€, r=5% annuo, n=30 anni, f=12 (mensile)


	expect(testCalculation.results.monthly_payment).toBe(537)
});

// Total paid calcultion
test('total paid is correct', () => {
	expect(testCalculation.results.total_paid).toBeCloseTo(537 * 12 * 30, 1)
});

// Total interests calculation
test('total interests is: total paid - principal', () => {
	const results = testCalculation.results
	expect(results.total_interest).toBe(results.total_paid - 100000)
});
