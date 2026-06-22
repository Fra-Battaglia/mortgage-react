import type Mortgage from "../types/Mortgage";

interface ResultsProps {
	results: Mortgage;
}

function AppMortgageResults({ results }: ResultsProps) {
	return (
		<div className="flex flex-col justify-between h-full">
			<div>
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-(--text-h) capitalize text-lg font-bold">
						Calculation Result
					</h2>
					<span
						className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md border text-(--bg) ${results.interest_rate ? "border-(--success) dark:text-(--success) bg-(--success-bg)" : "border-(--warning) dark:text-(--warning) bg-(--warning-bg)"}`}
					>
						{results.interest_rate ? "Fixed" : "Variable"} Rate{" "}
						{results.annual_rate}%
					</span>
					{/* <div className="flex items-center gap-2">
						<span className="text-(--text) font-medium text-sm">Interest Rate:</span>
					</div>  */}
				</div>
				<div>
					<p className="text-(--text) text-xs font-semibold uppercase tracking-wider">
						Estimated Payment - Monthly (12/year)
					</p>
					<p className="text-4xl md:text-5xl font-extrabold text-(--text-h) tracking-tight">
						€ {results.results?.monthly_payment.toFixed(2)}
					</p>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 border-t border-b border-(--accent)/50 py-6 my-2">
				<div>
					<span className="block text-(--text) text-xxs font-bold uppercase tracking-wider mb-1">
						Principal
					</span>
					<span className="text-sm md:text-md font-bold text-(--text-h)">
						€ {results.principal}
					</span>
				</div>
				<div>
					<span className="block text-(--text) text-xxs font-bold uppercase tracking-wider mb-1">
						Total Repaid
					</span>
					<span className="text-sm md:text-md font-bold text-(--text-h)">
						€ {results.results.total_paid}
					</span>
				</div>
				<div>
					<span className="block text-(--text) text-xxs font-bold uppercase tracking-wider mb-1">
						Interest Cost
					</span>
					<span className="text-sm md:text-md font-bold text-(--accent)">
						€ {results.results?.total_interest}
					</span>
				</div>
			</div>
			<div className="bg-(--bg) rounded-2xl p-4 border border-(--accent)/50">
				<h4 className="text-xs font-bold text-(--text-h) uppercase tracking-wider mb-2">
					Parameters Verified
				</h4>
				<ul className="text-xs text-(--text) space-y-1.5">
					<li>
						• Duration set to <strong className="text-(--text-h)"> {results.duration} years</strong> (total of <strong className="text-(--text-h)"> {results.duration * 12} periodic payments</strong>)
					</li>
					<li>
						• Interest calculation structured based on annual base
						rate of <strong className="text-(--text-h)"> {results.annual_rate}%</strong>
					</li>
					<li>
						• Configured as a <strong className="text-(--text-h) capitalize">{results.interest_rate ? "Fixed" : "Variable"} rate</strong> schedule
					</li>
				</ul>
			</div>
		</div>
	);
}

export default AppMortgageResults;
