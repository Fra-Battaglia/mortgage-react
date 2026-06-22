import { useData } from "../stores/DataContext";
import type Mortgage from "../types/Mortgage";
import AppMortgageCard from "./AppMortgageCard";

function AppCompairsonPanel() {
	const { store } = useData();
	
	return (
		<div className="bg-(--accent-bg) border border-(--accent) rounded-3xl overflow-hidden backdrop-blur-md h-full mt-8">
			<div className="px-6 py-6 flex items-center justify-between">
				<div>
					<h2 className="text-lg font-bold text-(--text-h) tracking-wide">Compare your options</h2>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 md:p-8 pt-0 md:pt-0">

				{store.selectedMortgages.map((mortgage:Mortgage, index) => (
					<AppMortgageCard key={index} mortgage={mortgage} />
				))}
			</div>
		</div>
	);
}

export default AppCompairsonPanel