import { useData } from "../stores/DataContext";

function AppForm() {
	const { store, updateStore, calculateAndSend } = useData();
	
	const handleSubmit = (e:React.SubmitEvent) => {
		e.preventDefault();
		calculateAndSend();

		// saveToLocalStorage;
	}

	return (
		<form
			className="space-y-6"
			onSubmit={handleSubmit}
		>
			<div className="flex flex-col w-full">
				<label
					htmlFor="input-principal-amount"
					className="block text-sm font-semibold text-(--text) mb-1.5"
				>
					Principal Amount
				</label>
				<div className="relative rounded-lg">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<span className="text-(--text) sm:text-sm">€</span>
					</div>
					<input
						id="input-principal-amount"
						className="block w-full rounded-lg bg-(--code-bg)/80 border-(--accent) text-(--text-h) placeholder-(--text) focus:border-(--accent) focus:ring-(--accent) sm:text-sm transition-all duration-200 py-2.5 pl-8 pr-4 border"
						aria-invalid="false"
						type="number"
						min="1000"
						max="10000000"
						placeholder="200,000"
						required
						value={store.principalAmount}
						onChange={(e) => updateStore({ principalAmount: e.target.value })}
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col w-full">
					<label
						htmlFor="input-annual-rate"
						className="block text-sm font-semibold text-(--text) mb-1.5"
					>
						Annual Interest Rate
					</label>
					<div className="relative rounded-lg">
						<input
							id="input-annual-rate"
							className="block w-full rounded-lg bg-(--code-bg)/80 border-(--accent) text-(--text-h) placeholder-(--text) focus:border-(--accent) focus:ring-(--accent) sm:text-sm transition-all duration-200 py-2.5 pl-4 pr-12 border"
							aria-invalid="false"
							type="number"
							min="0.1"
							max="25"
							step="0.05"
							placeholder="3.5"
							required
							value={store.annualRate}
							onChange={(e) => updateStore({ annualRate: e.target.value })}
						/>
						<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<span className="text-(--text) sm:text-sm">%</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full">
					<label
						htmlFor="input-duration"
						className="block text-sm font-semibold text-(--text) mb-1.5"
					>
						Duration
					</label>
					<div className="relative rounded-lg">
						<input
							id="input-duration"
							className="block w-full rounded-lg bg-(--code-bg)/80 border-(--accent) text-(--text-h) placeholder-(--text) focus:border-(--accent) focus:ring-(--accent) sm:text-sm transition-all duration-200 py-2.5 pl-4 pr-12 border"
							aria-invalid="false"
							type="number"
							min="1"
							max="40"
							step="1"
							placeholder="30"
							required
							value={store.durationYears}
							onChange={(e) => updateStore({ durationYears: e.target.value })}
						/>
						<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<span className="text-(--text) sm:text-sm">Years</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full">
				<label
					htmlFor="installments-select"
					className="block text-sm font-semibold text-(--text) mb-1.5"
				>
					Payment Frequency
				</label>
				<select
					id="installments-select"
					className="block w-full rounded-lg bg-(--code-bg)/80 border border-(--accent) text-(--text-h) placeholder-(--text) focus:border-(--accent) focus:ring-(--accent) sm:text-sm py-2.5 px-3 transition-all duration-200"
					value={store.paymentFrequency}
					onChange={(e) => updateStore({ paymentFrequency: e.target.value })}
				>
					<option value={12}>
						Monthly (12/year)
					</option>
					{/* <option :value=24>Semi-Monthly (24/year)</option>
					<option :value=26>Bi-Weekly (26/year)</option>
					<option :value=52 > Weekly(52 / year)</option > */}
				</select>
			</div>
			<div className="flex flex-col w-full">
				<span
					className="block text-sm font-semibold text-(--text) mb-2"
					id="toggle-interest-rate-flag-label"
				>
					Interest Rate
				</span>
				<div className="flex items-center space-x-3 bg-(--code-bg)/80 border border-(--accent) p-1.5 rounded-lg w-fit">
					<button
						type="button"
						role="switch"
						aria-checked={store.isRateFixed}
						aria-labelledby="toggle-interest-rate-flag-label"
						className={`px-4 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${store.isRateFixed ? "bg-(--accent) text-white" : "text-(--text) hover:text-(--text-h)"}`}
						// onClick={() => setRateFixed(true)}
						onClick={() => updateStore({ isRateFixed: true })}
					>
						{" "}
						Fixed
					</button>
					<button
						type="button"
						role="switch"
						aria-checked={!store.isRateFixed}
						aria-labelledby="toggle-interest-rate-flag-label"
						className={`px-4 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${!store.isRateFixed ? "bg-(--accent) text-white" : "text-(--text) hover:text-(--text-h)"}`}
						// onClick={() => setRateFixed(false)}>
						onClick={() => updateStore({ isRateFixed: false })}
					>
						Variable
					</button>
				</div>
			</div>
			<button
				type="submit"
				className="w-full bg-(--accent) text-white font-bold text-sm tracking-wider uppercase py-3.5 px-4 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-(--accent) focus:ring-offset-2 focus:ring-offset-(--bg) cursor-pointer"
			>
				Calculate Simulation
			</button>
		</form>
	);
}

export default AppForm;
