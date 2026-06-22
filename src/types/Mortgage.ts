export default interface Mortgage {
	principal: number,
	annual_rate: number,
	duration: number,
	payment_frequency: number,
	interest_rate: boolean,

	results: null | {
		monthly_payment: number,
		total_paid: number
		total_interest: number
	}
}

