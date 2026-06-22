export const calculateMortgage = (P: number, r: number, n: number, f: number, isRateFixed:boolean) => {
	
	// Formula: M = P · [ r(1 + r)ⁿ / ((1 + r)ⁿ − 1) ]

	const monthlyRate = r / 100 / 12;
	const totalPayments = n * f;

	// Monthly Payment
	let M: number = P * ((monthlyRate * (1 + monthlyRate) ** totalPayments) / ((1 + monthlyRate) ** totalPayments - 1));
	M = Number(Math.round(M));

	// Total Paid
	let totalPaid = Number(Math.round((M * totalPayments)))

	// Interest Cost
	let totalInterest = Number(Math.round(totalPaid - P));

	return {
		principal: P,
		annual_rate: r,
		duration: n,
		payment_frequency: f,
		interest_rate: isRateFixed,
		results: {
			monthly_payment: M,
			total_paid: totalPaid,
			total_interest: totalInterest,
		},
	}
};