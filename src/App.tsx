import { useData } from "./stores/DataContext"
import AppForm from "./components/AppForm.tsx";
import AppMortgageResults from "./components/AppMortgageResults.tsx";
import AppMortgageHistory from "./components/AppMortgageHistory.tsx";
// import type Mortgage from "./types/Mortgage"

function App() {
  	const { store } = useData();
	
	return (
		<div className="container pb-8 px-8 md:px-0">
			<h1 className="text-4xl font-black text-center my-8 text-(--text-h) uppercase tracking-wide">Mortgage Calculation</h1>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
				<div
					className="lg:col-span-5 bg-(--accent-bg) border border-(--accent) p-6 md:p-8 rounded-3xl backdrop-blur-md">
					<h2 className="text-lg font-bold text-(--text-h) mb-6 tracking-wide">Estimator Parameters</h2>

					{/* Form */}
					<AppForm />
				</div>
				<div
					className="lg:col-span-7 bg-(--bg) border border-(--accent) rounded-3xl p-6 md:p-8 backdrop-blur-md h-full">
					{/* Results Panel */}
					{store.calculationResults && (
						<AppMortgageResults results={store.calculationResults} />
					)}
				</div>
			</div>
			<AppMortgageHistory />
		</div>
  	)
}

export default App
