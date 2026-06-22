import { useData } from "../stores/DataContext";
import type Mortgage from "../types/Mortgage";


interface MortgageProps {
	mortgage: Mortgage;
}

function AppMortgageCard({ mortgage }:MortgageProps) {
	const { removeSelectedMortgage } = useData();
	
	return (
		<div className="bg-(--bg) border border-(--accent) rounded-xl p-4 text-(--text) flex flex-col justify-between hover:border-(--accent) transition-all duration-200">
		<div>
			<div className="flex justify-between items-center">
				<button className="text-xs font-semibold text-(--accent) hover:bg-(--accent) hover:text-(--bg) p-1 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						onClick={() => removeSelectedMortgage(mortgage)}
						className="lucide lucide-x-icon lucide-x text-sm cursor-pointer">
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>
				<span
					className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md border text-(--bg)
						${mortgage.interest_rate
							? 'border-(--success) dark:text-(--success) bg-(--success-bg)'
							: 'border-(--warning) dark:text-(--warning) bg-(--warning-bg)'
						}`
					}> { mortgage.interest_rate ? "Fixed" : "Variable" } Rate { mortgage.annual_rate }%
					
				</span>
			</div>

			<div className="my-4 border-t border-(--accent)/50"></div>

			<div className="flex flex-col gap-y-3.5">
				<div className="flex justify-between text-xs">
					<span className="">Principal:</span><span className="font-semibold text-(--text-h)">€ { mortgage.principal }</span>
				</div>

				<div className="flex justify-between text-xs">
					<span className="">Duration:</span><span className="font-semibold text-(--text-h)">{ mortgage.duration } years</span>
				</div>

				<div className="flex justify-between text-xs">
					<span className="">Payment Frequency:</span><span className="font-semibold text-(--text-h)">{ mortgage.payment_frequency } / year</span>
				</div>
			</div>

			<div className="my-4 border-t border-(--accent)/50"></div>

			<div className="flex flex-col gap-y-3.5">
				<div className="flex justify-between items-baseline">
					<span className="text-xs">Repayment:</span><span className="text-lg font-bold text-(--accent)">€ { mortgage.results?.monthly_payment.toFixed(2) }</span>
				</div>

				<div className="flex justify-between text-xs">
					<span>Total Repaid:</span><span className="font-semibold text-(--text-h)">€ { mortgage.results?.total_paid }</span>
				</div>

				<div className="flex justify-between text-xs">
					<span>Total Interest:</span><span className="font-semibold text-(--text-h)">€ { mortgage.results?.total_interest }</span>
				</div>
			</div>
		</div>
	</div>
	);
}

export default AppMortgageCard