import { useData } from "../stores/DataContext";
import type Mortgage from "../types/Mortgage";

function AppMortgageHistory() {
	const { store, deleteHistory, removeFromHistory } = useData();

	return (
		<div className="bg-(--bg) border border-(--accent) rounded-3xl overflow-hidden backdrop-blur-md h-full mt-8">
			{store.storedData.length === 0
				? (<div className="px-6 py-6 flex items-center justify-center">No simulations saved yet</div>)
				: (
					<div v-if="store.storedData.length != 0">

						<div className="px-6 py-6 flex items-center justify-between">
							<div>
								<h2 className="text-lg font-bold text-(--text-h) tracking-wide">History</h2>
								<p className="text-sm">Select items to compare them side-by-side</p>
							</div>

							<button className="bg-(--accent) text-white py-2 px-4 rounded-lg uppercase text-sm font-bold cursor-pointer tracking-wide" onClick={deleteHistory}>Delete All</button>
						</div>
						<div className="overflow-x-auto">
							<table className="w-full text-sm border-collapse">
								<thead className="uppercase text-xs px-6">
									<tr className="bg-(--accent-bg)">
										<th className="px-4 py-2 text-start w-0">Compare</th>
										<th className="px-4 py-2 text-start">Principal</th>
										<th className="px-4 py-2 text-start">Interest</th>
										<th className="px-4 py-2 text-start">Duration</th>
										<th className="px-4 py-2 text-start">Frequency</th>
										<th className="px-4 py-2 text-start">Rate</th>
										<th className="px-4 py-2 text-start">Payment</th>
										<th className="px-4 py-2 text-start w-0">Action</th>
									</tr>
								</thead>
								<tbody className="font-medium">
									{store.storedData.map((mortgage: Mortgage, index: number) => (

										<tr key={index} className="border-y border-(--accent)/50 first:border-t-0 last:border-b-0">
											<td className="px-4 py-3 text-nowrap text-center">
												<input
													type="checkbox"
													name="selectedMortgage"
													id={`mortgage-${index}`}
												/>
											</td>
											<td className="px-4 py-3 text-nowrap">€ {mortgage.principal}</td>
											<td className="px-4 py-3 text-nowrap">{mortgage.annual_rate}%</td>
											<td className="px-4 py-3 text-nowrap">{mortgage.duration} years</td>
											<td className="px-4 py-3 text-nowrap">{mortgage.payment_frequency} months / year</td>
											<td className="px-4 py-3 text-nowrap">
												<span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md border border-(--accent) text-(--bg)
													${(mortgage.interest_rate)
														? 'border-(--success) dark:text-(--success) bg-(--success-bg)'
														: 'border-(--warning) dark:text-(--warning) bg-(--warning-bg)'
													}`
												}>
													{mortgage.interest_rate ? "Fixed" : "Variable"}
												</span>
											</td>
											<td className="px-4 py-3 text-nowrap">€ {mortgage.results?.monthly_payment.toFixed(2)}</td>
											<td className="px-4 py-3 text-nowrap text-center flex items-center justify-center">
												<button className="p-1 text-(--accent) hover:bg-(--accent) hover:text-(--bg) rounded">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="1em"
														height="1em"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
														onClick={() => removeFromHistory(index)}
														className="lucide lucide-x-icon lucide-x text-sm cursor-pointer">
														<path d="M18 6 6 18" />
														<path d="m6 6 12 12" />
													</svg>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default AppMortgageHistory